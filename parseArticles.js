const fs = require("fs");

function parseMetadata(path) {
  let fileData = fs.readFileSync(path, "utf-8");
  let content = fileData;
  let metadata = fileData //Firstly we match metadata = {json...} and after we match more precisely with only {json}
    .match(/(---\n{)[\s\S]*(}\n---)/g)[0]
    .match(/({[\s\S]*})/g)[0];
  let keys = metadata.match(/\S\w*(?=: )/g); // We match key to add "" on it
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

function parseArticles() {
  if (!fs.existsSync("./src/content/blog/out")) {
    fs.mkdirSync("./src/content/blog/out");
  }
  var postList = [];

  let articles = fs.readdirSync("./src/content/blog"); // We read content folder to generate id

  if (articles.includes("out")) {
    articles.splice(articles.indexOf("out"), 1);
  }

  for (i in articles) {
    let { metadata, content } = parseMetadata(
      `./src/content/blog/${articles[i]}`
    );
    metadata.lang = metadata.lang.toLowerCase();
    let articleName = encodeURI(
      `${metadata.shortName.replace(" ", "-").toLowerCase()}-${metadata.id}`
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

  postList.sort(function (a, b) {
    // order by latest to oldone
    let aDate = a["date"].toString().split("/");
    let bDate = b["date"].toString().split("/");
    // let bDate = Number(b["date"].toString().replace(/\//g, ""));
    aDate = Number(aDate[2] + aDate[1] + aDate[0]);
    bDate = Number(bDate[2] + bDate[1] + bDate[0]);
    return bDate - aDate;
  });

  fs.writeFile(
    "./src/content/blog/out/postList.json",
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

  return postList.splice(0, 3);
}

module.exports = parseArticles;
