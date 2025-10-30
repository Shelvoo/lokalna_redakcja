const app = document.getElementById("app");


const header = document.createElement("div");
header.className = "header";
header.innerHTML = `
  <h1>Panel redakcji</h1>
  <p>Dodaj nowy artykuł do naszej strony</p>
`;
app.appendChild(header);

const section = document.createElement("div");
section.className = "section";
section.innerHTML = `
  <div class="box">
    <h2>Dodaj artykuł</h2>
    <form id="articleForm">
      <label>Tytuł:</label><br>
      <input type="text" id="title" style="width:100%; margin-bottom:10px;"><br>
      <label>Treść:</label><br>
      <textarea id="content" style="width:100%; height:120px; margin-bottom:10px;"></textarea><br>
      <button type="submit">Dodaj</button>
    </form>
  </div>
  <div class="box">
    <h2>Podgląd artykułów</h2>
    <div id="articlesList"></div>
  </div>
`;
app.appendChild(section);





document.getElementById("articleForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if(title && content) {
    const articleDiv = document.createElement("div");
    articleDiv.style.border = "1px solid #ccc";
    articleDiv.style.padding = "10px";
    articleDiv.style.margin = "10px 0";
    articleDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    document.getElementById("articlesList").appendChild(articleDiv);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }
});
