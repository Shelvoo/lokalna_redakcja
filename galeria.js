const app = document.getElementById("app");


const header = document.createElement("div");
header.className = "header";
header.innerHTML = `
  <h1>Galeria zdjęć</h1>
  <p>Najciekawsze momenty z życia naszej gminy</p>
`;
app.appendChild(header);


const section = document.createElement("div");
section.className = "section";
section.style.display = "flex";
section.style.flexWrap = "wrap";
section.style.justifyContent = "center";

for(let i=1; i<=8; i++) {
  const imgBox = document.createElement("div");
  imgBox.className = "box";
  imgBox.style.width = "200px";
  imgBox.style.height = "150px";
  imgBox.style.backgroundColor = "#eee";
  imgBox.style.margin = "10px";
  imgBox.style.display = "flex";
  imgBox.style.alignItems = "center";
  imgBox.style.justifyContent = "center";
  imgBox.innerText = "Zdjęcie " + i;
  section.appendChild(imgBox);
}

app.appendChild(section);
