const fs = require("fs");
const path = require("path");

function parseMetadata(path) {
  let fileData = fs.readFileSync(path, "utf-8");
  let content = fileData;
  let metadata = fileData //Firstly we match metadata = {json...} and after we match more precisely with only {json}
    .match(/(---\n{)[\s\S]*(}\n---)/g)[0]
    .match(/({[\s\S]*})/g)[0];
  let keys = metadata.match(/\S\w*(?=:)/g); // We match key to add "" on it
  for (i in keys) {
    metadata = metadata.replace(keys[i], `"${keys[i]}"`); // we add "" on each key in the object
  }
  metadata = JSON.parse(metadata.replace(/,\n(?=})/g, "")); // if last child have a , we drop it

  content = content.replace(/(---\n{)[\s\S]*(}\n---)/g, "");

  return {
    metadata,
    content,
  }; // We return metada parsed
}
var postList = [];
var contentList = [];

let articles = fs.readdirSync("./src/content/blog"); // We read content folder to generate id

if (articles.includes("postList.json")) {
  // we remove list if she already exist
  articles.splice(articles.indexOf("postList.json"), 1);
}
if (articles.includes("articles")) {
  articles.splice(articles.indexOf("articles"), 1);
}

try {
  postList = JSON.parse(fs.readFileSync("./src/content/blog/postList.json"));
} catch (error) {
  console.log("No postList found, creating new one ...");
  postList = [];
}

for (i in articles) {
  let { metadata, content } = parseMetadata(
    `./src/content/blog/${articles[i]}`
  );
  metadata.lang = metadata.lang.toLowerCase();
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
          contentList[i].content[metadata.lang] = content;
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
      file: `content/blog/articles/${metadata.id}.json`,
    });
    contentList.push({
      name: metadata.id,
      content: { [metadata.lang]: content },
    });
  }
}

if (!fs.existsSync("./src/content/blog/articles")) {
  fs.mkdirSync("./src/content/blog/articles");
}

for (i in contentList) {
  fs.writeFile(
    `./src/content/blog/articles/${contentList[i].name}.json`,
    JSON.stringify(contentList[i]),
    function (err) {
      if (err) {
        console.log(err);
        throw new error(err);
      }
    }
  );
}

fs.writeFile(
  "./src/content/blog/postList.json",
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
