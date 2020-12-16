const fs = require("fs");
const path = require("path");

function parseMetadata(path) {
  let fileData = fs.readFileSync(path, "utf-8");
  let metadata = fileData //Firstly we match metadata = {json...} and after we match more precisely with only {json}
    .match(/\b(metadata = )({[\s\S]*})/g)[0]
    .match(/({[\s\S]*})/g)[0];
  let keys = metadata.match(/\S\w*(?=:)/g); // We match key to add "" on it
  for (i in keys) {
    metadata = metadata.replace(keys[i], `"${keys[i]}"`); // we add "" on each key in the object
  }
  metadata = metadata.replace(/,\n(?=})/g, ""); // if last child have a , we drop it

  return JSON.parse(metadata); // We return metada parsed
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
  let article = articles[i];
  let metadata = parseMetadata(`./src/content/${articles[i]}`);
  let articleName = `${metadata.name.replace(" ", "-")}-${metadata.id}`;
  var articleExistsName = [];
  for (i in postList) {
    articleExistsName.push(postList[i].name);
  }
  if (articleExistsName.includes(metadata.name)) {
    for (i in postList) {
      if (postList[i].name == metadata.name) {
        if (!postList[i].lang.includes(metadata.lang)) {
          postList[i].lang.push(metadata.lang);
          postList[i].file[metadata.lang] = path.resolve(
            `./src/content/${article}`
          );
        }
        break;
      }
    }
  } else {
    postList.push({
      id: articleName,
      author: metadata.author,
      name: metadata.name,
      synopsis: metadata.synopsis,
      lang: [metadata.lang],
      image: metadata.image,
      file: { [metadata.lang]: path.resolve(`./src/content/${article}`) },
    });
  }
  // console.log(postList);
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

console.log(
  "Succesfully generated postList.json for articles",
  `\n-> ${postList.length} ${articles > 1 ? "articles" : "article"}`
);
