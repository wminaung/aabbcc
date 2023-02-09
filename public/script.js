import Cookey from "./node_modules/cookey/index.js";
console.log(Cookey);
const nameTag = document.getElementById("name");
const emailTag = document.getElementById("email");
const formTag = document.getElementById("form");

formTag.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = { name: nameTag.value, email: emailTag.value };

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  console.log(data);
  if (data.status === "success" && data.cookie !== "") {
    const key = "winlogin";
    const value = data.cookie;
    const date = new Date();
    const hour = 1;
    const path = "/";
    new Cookey(key, value, date, hour, path);
    window.location.href = "./home";
  }
});
