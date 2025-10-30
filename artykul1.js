    const app = document.getElementById("app");

const header = document.createElement("div");
header.className = "header";
header.innerHTML = `<h1>Rzeszot II. Druga szansa w kampaniach</h1>`;
app.appendChild(header);

const section = document.createElement("div");
section.className = "section";
section.innerHTML = `
  <div class="box">
    <p>Pełna treść artykułu o inicjatywie „Rzeszot II” i jej wpływie na lokalne kampanie społeczne. 
    Tutaj możesz wpisać dłuższy tekst, zdjęcia, cytaty i inne szczegóły.</p>
  </div>
`;
app.appendChild(section);
