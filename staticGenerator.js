const fs = require("fs");

const parseArticle = require("./parseArticles");
const parseProjects = require("./parseProjects");

let projects = parseProjects();
let articles = parseArticle();

let home = {
  projects: projects,
  articles: articles,
};

fs.writeFile("./src/content/home.json", JSON.stringify(home), function (err) {
  if (err) {
    console.log(err);
    throw new error(err);
  }
});
