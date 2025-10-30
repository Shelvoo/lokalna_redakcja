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
    <h2>Dane kontaktowe</h2>
    <p><strong>Email:</strong> kontakt@lokalnaredakcja.pl</p>
    <p><strong>Telefon:</strong> +48 123 456 789</p>
    <p><strong>Adres:</strong> ul. Główna 12, 43-200 Pszczyna</p>
  </div>
  <div class="box">
    <h2>Formularz kontaktowy</h2>
    <form>
      <label>Imię i nazwisko:</label><br>
      <input type="text" style="width:100%; margin-bottom:10px;"><br>
      <label>Email:</label><br>
      <input type="email" style="width:100%; margin-bottom:10px;"><br>
      <label>Wiadomość:</label><br>
      <textarea style="width:100%; height:100px; margin-bottom:10px;"></textarea><br>
      <button type="submit">Wyślij</button>
    </form>
  </div>
  <div class="box">
    <h2>Godziny pracy</h2>
    <p>Poniedziałek – Piątek: 9:00 – 17:00</p>
    <p>Sobota: 10:00 – 14:00</p>
    <p>Niedziela: nieczynne</p>
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
  </div>
  <div>
    <h4>Social Media</h4>
    <a href="#">Facebook</a>
    <a href="#">Instagram</a>
    <a href="#">YouTube</a>
  </div>
`;
app.appendChild(footer);
