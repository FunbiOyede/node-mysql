const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

const route = require("./routes/Products");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", route);

app.use((req, res) => {
  res.json({ response: "endpoint not found" });
});

const server = http.createServer(app);

server.listen(5050, () => {
  console.log("server started");
});
