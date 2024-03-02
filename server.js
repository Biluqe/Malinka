import express from "express";

const app = express();
const port = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/galeria", (req, res) => {
  res.render("galeria.ejs");
});
app.get("/partnerzy", (req, res) => {
  res.render("partnerzy.ejs");
});
app.get("/organizatorzy", (req, res) => {
  res.render("organizatorzy.ejs");
});
app.listen(port, () => {
  console.log("Serwer is running on port", port, ".");
});
