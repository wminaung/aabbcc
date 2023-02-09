const express = require("express");

const app = express();

const userFormDatabase = {
  name: "win",
  email: "min@min",
};
const cookie = "axbxcx";
app.use(express.json(), express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const auth = (req, res, next) => {
  const { name, email } = req.body;
  const { name: sname, email: semail } = userFormDatabase;
  if (name !== sname || email !== semail) {
    return res.json({ status: "fail" });
  } else {
    next();
  }
};

app.post("/login", auth, (req, res) => {
  res.status(200).json({ status: "success", cookie });
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "\\home\\home.html");
});

app.get("/node_modules/cookey/index.js", (req, res) => {
  res.sendFile(__dirname + "\\node_modules\\cookey\\dist\\Cookey.js");
});
// app.get("/node_modules/cookey/dist/Cookey.js", (req, res) => {
//   res.sendFile(__dirname + "\\node_modules\\cookey\\dist\\Cookey.js");
// });
