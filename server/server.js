import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import fs from "fs";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const app = express();

app.use("^/$", (req, res) => {
  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf-8", (err, data) => {
    console.log(err, data);
    if (err) {
      console.log(err);
      return res.status(500).send("Error occurred , please check logs");
    }
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.urk}>
        <App />
      </StaticRouter>
    );
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(8080, () => {
  console.log("SSR Server listening 8080");
});
