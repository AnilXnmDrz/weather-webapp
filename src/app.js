
const hbs = require("hbs");
const path = require("path");
const forecast = require("./utils.js");
const port= process.env.PORT || 3005

const express = require("express");
const app = express();

//setting path
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//express configuration
app.set("view engine", "hbs");
app.set("views", viewsDirectory);
hbs.registerPartials(partialsPath);

//loading static file
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    head_title: "WEATHER",
    foot_title: "axd",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    head_title: "HELP PAGE",
    foot_title: "axd",
  });
});

app.get("/json", (req, res) => {
  res.send({
    name: "anil",
    company: "robo mq",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.location) {
    return res.send({ error: "please provide a location" });
  }
  forecast(req.query.location, (error, response) => {
    if (error) {
      return res.send({ error: error });
    }
    res.send(
      response
    );
  });
 
});

app.get("/help/*", (req, res) => {
  res.send("help article not found");
});
app.get("*", (req, res) => {
  res.send("error:404 Page not found");
});

app.listen(port, () => {
  console.log("server is up at port"+ port );
});
