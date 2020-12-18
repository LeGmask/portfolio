const fs = require("fs");

function parseMetadata(path) {
  let fileData = fs.readFileSync(path, "utf-8");
  let content = fileData;
  let metadata = fileData //Firstly we match metadata = {json...} and after we match more precisely with only {json}
    .match(/(---)[\s\S]*(---)/g)[0]
    .match(/({[\s\S]*})/g)[0];
  let keys = metadata.match(/\S\w*(?=:)/g); // We match key to add "" on it
  for (i in keys) {
    metadata = metadata.replace(keys[i], `"${keys[i]}"`); // we add "" on each key in the object
  }
  metadata = JSON.parse(metadata.replace(/,\n(?=})/g, "")); // if last child have a , we drop it

  content = content.replace(/(---)[\s\S]*(---)/g, "");

  return {
    metadata,
    content,
  }; // We return metada parsed
}
var postList = [];

let articles = fs.readdirSync("./src/content/"); // We read content folder to generate id

if (articles.includes("postList.json")) {
  // we remove list if she already exist
  articles.splice(
    articles.indexOf("postList.json"),
    articles.indexOf("postList.json")
  );
}

try {
  postList = JSON.parse(fs.readFileSync("./src/content/postList.json"));
} catch (error) {
  console.log("No postList found, creating new one ...");
  postList = [];
}

// json = JSON.stringify({ test: "test" });
for (i in articles) {
  let { metadata, content } = parseMetadata(`./src/content/${articles[i]}`);
  let articleName = encodeURI(
    `${metadata.name.replace(" ", "-").toLowerCase()}-${metadata.id}`
  );
  var articleExistsId = [];
  for (i in postList) {
    articleExistsId.push(postList[i].id);
  }
  if (articleExistsId.includes(articleName)) {
    for (i in postList) {
      if (postList[i].id == articleName) {
        if (!postList[i].lang.includes(metadata.lang)) {
          postList[i].lang.push(metadata.lang);
          postList[i].name[metadata.lang] = metadata.name;
          postList[i].synopsis[metadata.lang] = metadata.synopsis;
          postList[i].content[metadata.lang] = content;
        }
        break;
      }
    }
  } else {
    postList.push({
      id: articleName,
      date: metadata.date,
      author: metadata.author,
      name: { [metadata.lang]: metadata.name },
      synopsis: { [metadata.lang]: metadata.synopsis },
      lang: [metadata.lang],
      image: metadata.image,
      content: { [metadata.lang]: content },
    });
  }
}

fs.writeFile(
  "./src/content/postList.json",
  JSON.stringify(postList),
  function (err) {
    if (err) {
      console.log(err);
      throw new error(err);
    }
  }
);

// console.log(postList);

console.log(
  "Succesfully generated postList.json for articles",
  `\n-> ${postList.length} ${articles > 1 ? "articles" : "article"}`
);
