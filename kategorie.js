const app = document.getElementById("app");


const header = document.createElement("div");
header.className = "header";
header.innerHTML = `
  <h1>Lokalna redakcja</h1>
  <p>Wiadomości, kultura i sport z naszej gminy – codziennie najważniejsze lokalne tematy.</p>
`;
app.appendChild(header);


const navbar = document.createElement("div");
navbar.className = "navbar";
navbar.innerHTML = `
  <a href="start.html">Start</a>
  <a href="oredakcji.html">O redakcji</a>
  <a href="kategorie.html">Kategorie</a>
  <a href="kontakt.html">Kontakt</a>
`;
app.appendChild(navbar);




const section = document.createElement("div");
section.className = "section";
section.innerHTML = `
  <div class="box">
    <h2>Kultura</h2>
    <p>Relacje z wydarzeń artystycznych, koncertów, spektakli i lokalnych inicjatyw kulturalnych.</p>
  </div>
  <div class="box">
    <h2>Sport</h2>
    <p>Wyniki meczów, sylwetki sportowców, relacje z zawodów i turniejów w naszej gminie.</p>
  </div>
  <div class="box">
    <h2>Społeczne</h2>
    <p>Najważniejsze sprawy mieszkańców, inicjatywy społeczne, wydarzenia lokalne i akcje charytatywne.</p>
  </div>
  <div class="box">
    <h2>Edukacja</h2>
    <p>Informacje ze szkół, konkursy, matury, projekty uczniowskie i wydarzenia edukacyjne.</p>
  </div>
  <div class="box">
    <h2>Gospodarka</h2>
    <p>Rozwój lokalnych firm, inwestycje, rynek pracy i wsparcie przedsiębiorczości.</p>
  </div>
  <div class="box">
    <h2>Historia</h2>
    <p>Opowieści o naszej gminie, wspomnienia mieszkańców, lokalne tradycje i dziedzictwo.</p>
  </div>
`;
app.appendChild(section);


const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = `
  <div>
    <h4>Redakcja</h4>
    <a href="oredakcji.html">O nas</a>
    <a href="kontakt.html">Kontakt</a>
    <a href="start.html">Strona główna</a>
  </div>
  <div>
    <h4>Kategorie</h4>
    <a href="kategorie.html">Kultura</a>
    <a href="kategorie.html">Sport</a>
    <a href="kategorie.html">Społeczne</a>
    <a href="kategorie.html">Edukacja</a>
    <a href="kategorie.html">Gospodarka</a>
    <a href="kategorie.html">Historia</a>
  </div>
  <div>
    <h4>Social Media</h4>
    <a href="#">Facebook</a>
    <a href="#">Instagram</a>
    <a href="#">YouTube</a>
  </div>
`;
app.appendChild(footer);
