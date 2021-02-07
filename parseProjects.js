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

function parseContent(content) {
  content = content.replace(/<!--(.*?)-->/g, "");
  let title = content.match(/^# (.*?)\n/gm)[0].substring(2);
  title = title.substring(0, title.length - 1);
  content = content.replace(/^# (.*?)\n/gm, "");
  let media = content.match(/!\[(image|video|audio):(.*?)\]\((.*?)\)/); // match media for projects
  content = content.replace(/!\[(image|video|audio):((.*?))\]\((.*?)\)/g, "");
  media
    ? (media = {
        type: media[1],
        alt: media[2],
        source: media[3],
      })
    : null;
  let links = content.match(/^\[(.*?)\]\((.*?)\)/gm); // match links
  links = links.map((link) => {
    let match = link.match(/\[(.*?)\]\((.*?)\)/);
    return { name: match[1], url: match[2] };
  });
  content = content.replace(/^\[(.*?)\]\((.*?)\)/gm, "");

  content = content.match(/^\b([\s\S]*?)\n/gm); // split paragraph

  return {
    title,
    media,
    links,
    content,
  };
}

function parseProjects() {
  if (!fs.existsSync("./src/content/project/out")) {
    fs.mkdirSync("./src/content/project/out");
  }

  var projectsList = [];
  var contentList = [];
  var projectsExistsId = [];

  let projects = fs.readdirSync("./src/content/project"); // We read content folder to generate id

  if (projects.includes("out")) {
    projects.splice(projects.indexOf("out"), 1);
  }

  for (i in projects) {
    let { metadata, content } = parseMetadata(
      `./src/content/project/${projects[i]}`
    );

    contentData = parseContent(content);

    metadata.lang = metadata.lang.toLowerCase();

    let URI = contentData.title
      .toLowerCase()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
      .replace(" ", "-");

    if (projectsExistsId.includes(URI)) {
      for (i in projectsList) {
        if (projectsList[i].uri == URI) {
          projectsList[i].lang.push(metadata.lang);
          projectsList[i].desc[metadata.lang] = contentData.content[0];
          projectsList[i].links[metadata.lang] = contentData.links;
          contentData.content.shift();
          contentList[i].content[metadata.lang] = contentData.content;
        }
        break;
      }
    } else {
      projectsExistsId.push(URI);
      projectsList.push({
        uri: URI,
        tags: metadata.tags,
        buildWith: metadata.buildWith,
        layout: metadata.layout,
        created: metadata.created,
        title: contentData.title,
        media: contentData.media,
        lang: [metadata.lang],
        desc: { [metadata.lang]: contentData.content[0] },
        links: { [metadata.lang]: contentData.links },
        file: `content/project/out/projects/${URI}.json`,
      });

      contentData.content.shift();
      contentList.push({
        uri: URI,
        content: { [metadata.lang]: contentData.content },
      });
    }
  }

  if (!fs.existsSync("./src/content/project/out/projects")) {
    fs.mkdirSync("./src/content/project/out/projects");
  }

  for (i in contentList) {
    fs.writeFile(
      `./src/content/project/out/projects/${contentList[i].uri}.json`,
      JSON.stringify(contentList[i]),
      function (err) {
        if (err) {
          console.log(err);
          throw new error(err);
        }
      }
    );
  }

  projectsList.sort(function (a, b) {
    // order by latest to oldone
    let aDate = a["created"].toString().split("/");
    let bDate = b["created"].toString().split("/");
    // let bDate = Number(b["date"].toString().replace(/\//g, ""));
    aDate = Number(aDate[2] + aDate[1] + aDate[0]);
    bDate = Number(bDate[2] + bDate[1] + bDate[0]);
    return bDate - aDate;
  });

  fs.writeFile(
    "./src/content/project/out/projectsList.json",
    JSON.stringify(projectsList),
    function (err) {
      if (err) {
        console.log(err);
        throw new error(err);
      }
    }
  );

  console.log(
    "Succesfully generated projects.json for projects",
    `\n-> ${projectsList.length} ${projects > 1 ? "projects" : "project"}`
  );

  return projectsList.splice(0, 3);
}

module.exports = parseProjects;
