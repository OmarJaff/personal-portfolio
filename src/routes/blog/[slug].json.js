import posts from "./_posts.js";
import grayMatter from "gray-matter";
import marked from "marked";
import path from "path";
import fs from "fs";

const getPost = (fileName) => {
  return fs.readFileSync(
    path.resolve("static/posts/", `${fileName}.md`),
    "utf-8"
  );
};

const lookup = new Map();
posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, res, _) {
  const { slug } = req.params;

  const post = getPost(slug);
  const renderer = new marked.Renderer();

  const { data, content } = grayMatter(post);
  const html = marked(content, { renderer });

  if (html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
