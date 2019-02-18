const express = require("express");
const api = require("./routes/index");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { swaggerSpec } = require("./swagger/index");

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/html/index.html"))
);

app.use("/api", api);

app.get("/swagger.json", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
