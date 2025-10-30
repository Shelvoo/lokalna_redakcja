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
    <h2>Nasza misja</h2>
    <p>Tworzymy lokalne media, które łączą mieszkańców. Promujemy inicjatywy, informujemy o wydarzeniach i wspieramy społeczność.</p>
  </div>
  <div class="box">
    <h2>Kim jesteśmy?</h2>
    <p>Jesteśmy zespołem dziennikarzy, fotografów i redaktorów, którzy codziennie pracują nad tym, by dostarczyć Ci najważniejsze informacje z gminy.</p>
  </div>
  <div class="box">
    <h2>Nasze wartości</h2>
    <p>Stawiamy na rzetelność, lokalność i zaangażowanie. Każdy głos ma znaczenie, a każda historia zasługuje na uwagę.</p>
  </div>
  <div class="box">
    <h2>Historia redakcji</h2>
    <p>Powstaliśmy w 2018 roku jako niezależna inicjatywa. Od tego czasu rozwijamy się dzięki wsparciu lokalnych mieszkańców i instytucji.</p>
  </div>
  <div class="box">
    <h2>Zespół redakcyjny</h2>
    <p>Redaktor naczelny: Jan Kowalski<br>Reporterzy: Anna Nowak, Piotr Zieliński<br>Fotograf: Marta Lewandowska</p>
  </div>
  <div class="box" style="background-color: #ffe0e0; border-color: #ff0000;">
    <h2 style="color: #ff0000;">Dołącz do nas</h2>
    <p>Masz pomysł na artykuł? Chcesz współpracować? Napisz do nas na <strong>kontakt@lokalnaredakcja.pl</strong> – jesteśmy otwarci na nowe głosy!</p>
  </div>
`;
app.appendChild(section);

const extraBox = document.createElement("div");
extraBox.className = "box";
extraBox.innerHTML = `
  <h2>Nasze osiągnięcia</h2>
  <p>Od 2018 roku opublikowaliśmy ponad 2000 artykułów, zorganizowaliśmy 15 wydarzeń lokalnych i współpracowaliśmy z 30 szkołami i stowarzyszeniami.</p>
`;
section.appendChild(extraBox);

const opinionsBox = document.createElement("div");
opinionsBox.className = "box";
opinionsBox.innerHTML = `
  <h2>Opinie mieszkańców</h2>
  <p>"To najlepsze źródło informacji o naszej gminie!" – Anna, 17 lat<br>
     "Dzięki wam wiem, co dzieje się w kulturze i sporcie." – Marek, 42 lata</p>
`;
section.appendChild(opinionsBox);




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
    <a href="kategorie.html">Sport</a>
    <a href="kategorie.html">Społeczne</a>
  </div>
  <div>
    <h4>Social Media</h4>
    <a href="#">Facebook</a>
    <a href="#">Instagram</a>
    <a href="#">YouTube</a>
  </div>
`;
app.appendChild(footer);

