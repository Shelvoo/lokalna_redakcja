// =====================
// KONFIGURACJA PORTALU
// =====================
const site = {
  meta: {
    title: "Lokalna redakcja",
    description: "Wiadomości, kultura i sport z naszej gminy – codziennie najważniejsze lokalne tematy.",
    language: "pl-PL",
  },
  nav: [
    { label: "Start", path: "index.html" },
    { label: "O redakcji", path: "autorzy.html" },
    { label: "Kategorie", path: "kategorie.html" },
    { label: "Aktualności", path: "aktualnosci.html" },
    { label: "Kontakt", path: "kontakt.html" },
  ],
  social: [
    { id: "facebook", label: "Facebook", url: "#" },
    { id: "instagram", label: "Instagram", url: "#" },
    { id: "x", label: "X (Twitter)", url: "#" },
  ],
  contact: {
    email: "kontakt@lokalna-redakcja.pl",
    phone: "+48 600 111 222",
    address: "ul. Rynek 5, 00-000 Nasze Miasto",
    mapImage: "images/mapa-miasta.jpg",
  },
};

let zmienna1 = site.meta.title;
let h1 = document.createElement("h1");
h1.textContent = zmienna1;
let tytul = document.getElementById("title")
tytul.appendChild(h1)

let zmienna2 = site.meta.description;
let h2 = document.createElement("h2");
h2.textContent = zmienna2;
tytul.appendChild(h2)


let site1 = site.nav[0]
let h31 = document.createElement("h3");
h31.textContent = site1.label
let a1 = document.getElementById("a1")
a1.href = site1.path;
a1.appendChild(h31)

let site2 = site.nav[1]
let h32 = document.createElement("h3");
h32.textContent = site2.label
let a2 = document.getElementById("a2")
a2.href = site2.path;
a2.appendChild(h32)

let site3 = site.nav[2]
let h33 = document.createElement("h3");
h33.textContent = site3.label
let a3 = document.getElementById("a3")
a3.href = site3.path;
a3.appendChild(h33)

let site4 = site.nav[3]
let h34 = document.createElement("h3");
h34.textContent = site4.label
let a4 = document.getElementById("a4")
a4.href = site4.path;
a4.appendChild(h34)

let site5 = site.nav[4]
let h35 = document.createElement("h3");
h35.textContent = site5.label
let a5 = document.getElementById("a5")
a5.href = site5.path;
a5.appendChild(h35)

// =====================
// KATEGORIE (DZIAŁY)
// =====================
const categories = [
  {
    id: "miasto-gmina",
    name: "Miasto i gmina",
    description: "Decyzje urzędu, inwestycje, komunikacja i sprawy mieszkańców.",
    color: "#0EA5E9",
    icon: "icon-townhall",
    cover: "images/kategorie/miasto.jpg",
  },
  {
    id: "kultura",
    name: "Kultura lokalna",
    description: "Wydarzenia, recenzje, rozmowy z twórcami.",
    color: "#8B5CF6",
    icon: "icon-mask",
    cover: "images/kategorie/kultura.jpg",
  },
  {
    id: "sport",
    name: "Sport lokalny",
    description: "Relacje z meczów, ligi amatorskie, sylwetki zawodników.",
    color: "#10B981",
    icon: "icon-sport",
    cover: "images/kategorie/sport.jpg",
  },
  {
    id: "biznes",
    name: "Biznes i rynek",
    description: "Lokalne firmy, targi, praca i inicjatywy przedsiębiorców.",
    color: "#F59E0B",
    icon: "icon-briefcase",
    cover: "images/kategorie/biznes.jpg",
  },
  {
    id: "interwencje",
    name: "Interwencje",
    description: "Zgłoszenia mieszkańców, bezpieczeństwo, ważne ostrzeżenia.",
    color: "#EF4444",
    icon: "icon-alert",
    cover: "images/kategorie/interwencje.jpg",
  },
];

// =====================
// AUTORZY / REDAKCJA
// =====================
const authors = [
  {
    id: "martyna-grabowska",
    name: "Martyna Grabowska",
    role: "Redaktorka naczelna",
    avatar: "images/autorzy/martyna.jpg",
    bio: "Koordynuje pracę redakcji, pisze o sprawach samorządowych.",
    email: "martyna@lokalna-redakcja.pl",
    socials: { x: "#", instagram: "#" },
    beats: ["miasto-gmina", "interwencje"],
  },
  {
    id: "piotr-wasilewski",
    name: "Piotr Wasilewski",
    role: "Reporter",
    avatar: "images/autorzy/piotr.jpg",
    bio: "Lubi tematy społeczne i szybkie relacje z miejsca zdarzeń.",
    email: "piotr@lokalna-redakcja.pl",
    socials: { facebook: "#", x: "#" },
    beats: ["interwencje", "biznes"],
  },
  {
    id: "ola-janicka",
    name: "Ola Janicka",
    role: "Dziennikarka kulturalna",
    avatar: "images/autorzy/ola.jpg",
    bio: "Recenzuje wydarzenia kulturalne i rozmawia z artystami.",
    email: "ola@lokalna-redakcja.pl",
    socials: { instagram: "#" },
    beats: ["kultura"],
  },
  {
    id: "damian-sobczak",
    name: "Damian Sobczak",
    role: "Dziennikarz sportowy",
    avatar: "images/autorzy/damian.jpg",
    bio: "Relacjonuje rozgrywki lokalnych drużyn i amatorki.",
    email: "damian@lokalna-redakcja.pl",
    socials: { x: "#" },
    beats: ["sport"],
  },
  {
    id: "nina-krol",
    name: "Nina Król",
    role: "Redaktorka działu biznes",
    avatar: "images/autorzy/nina.jpg",
    bio: "Pisze o lokalnych firmach, rynku pracy i inicjatywach.",
    email: "nina@lokalna-redakcja.pl",
    socials: { linkedin: "#" },
    beats: ["biznes", "miasto-gmina"],
  },
];

// =====================
// POSTY / ARTYKUŁY
// =====================
// ISO 8601; featured -> wyróżnione na stronie głównej
const posts = [
  {
    id: "remont-ulicy-dlugiej",
    slug: "remont-ulicy-dlugiej",
    title: "Remont ul. Długiej rusza w listopadzie",
    excerpt: "Utrudnienia potrwają około 3 miesięcy. Sprawdź objazdy.",
    content: "Ratusz ogłosił harmonogram prac na ul. Długiej. W pierwszym etapie zamknięte zostaną odcinki przy rynku...",
    cover: "images/posty/dluga.jpg",
    date: "2025-10-20T08:00:00+02:00",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
    tags: ["inwestycje", "drogi", "komunikat"],
    readingMinutes: 3,
    featured: true,
  },
  {
    id: "festiwal-filmowy-pod-szkolnym-niebem",
    slug: "festiwal-filmowy-pod-szkolnym-niebem",
    title: "Festiwal filmowy „Pod szkolnym niebem” już w sobotę",
    excerpt: "Plenerowe pokazy, warsztaty i spotkania z twórcami.",
    content: "Na placu przy domu kultury stanie ekran o szerokości 12 metrów. Organizatorzy zapowiadają konkurs krótkich metraży...",
    cover: "images/posty/festiwal.jpg",
    date: "2025-10-17T12:00:00+02:00",
    categoryId: "kultura",
    authorId: "ola-janicka",
    tags: ["kino", "wydarzenia"],
    readingMinutes: 2,
    featured: true,
  },
  {
    id: "derby-pilki-noznej-lider-pokonany",
    slug: "derby-pilki-noznej-lider-pokonany",
    title: "Derby piłki nożnej: lider pokonany 2:1",
    excerpt: "Decydująca bramka w 89. minucie po kontrze gospodarzy.",
    content: "Mecz rozpoczął się od przewagi gości, ale po przerwie miejscowi przejęli inicjatywę...",
    cover: "images/posty/derby.jpg",
    date: "2025-10-12T18:30:00+02:00",
    categoryId: "sport",
    authorId: "damian-sobczak",
    tags: ["piłka nożna", "derby"],
    readingMinutes: 3,
    featured: true,
  },
  {
    id: "targi-pracy-w-hali-sportowej",
    slug: "targi-pracy-w-hali-sportowej",
    title: "Targi pracy w hali sportowej – 40 wystawców",
    excerpt: "Oferty staży i etatów dla uczniów i absolwentów.",
    content: "W programie konsultacje CV, warsztaty z rekruterami i strefa doradztwa zawodowego...",
    cover: "images/posty/targi-pracy.jpg",
    date: "2025-10-08T10:00:00+02:00",
    categoryId: "biznes",
    authorId: "nina-krol",
    tags: ["praca", "targi", "edukacja"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "awaria-wodociagow-na-osiedlu",
    slug: "awaria-wodociagow-na-osiedlu",
    title: "Awaria wodociągów na osiedlu Północ – beczkowozy",
    excerpt: "Przerwa w dostawie wody potrwa do godz. 18:00.",
    content: "Zakład komunalny informuje o pęknięciu magistrali przy ul. Leśnej. Na miejscu pracują służby...",
    cover: "images/posty/woda.jpg",
    date: "2025-10-23T07:30:00+02:00",
    categoryId: "interwencje",
    authorId: "piotr-wasilewski",
    tags: ["awaria", "komunikat"],
    readingMinutes: 1,
    featured: true,
  },
  {
    id: "otwarcie-inkubatora-przedsiebiorczosci",
    slug: "otwarcie-inkubatora-przedsiebiorczosci",
    title: "Otwarcie Inkubatora Przedsiębiorczości",
    excerpt: "Nowa przestrzeń dla startujących firm w centrum miasta.",
    content: "W budynku dawnej poczty powstało miejsce coworkingowe z doradztwem i szkoleniami...",
    cover: "images/posty/inkubator.jpg",
    date: "2025-09-29T09:00:00+02:00",
    categoryId: "biznes",
    authorId: "nina-krol",
    tags: ["startup", "coworking"],
    readingMinutes: 3,
    featured: false,
  },
  {
    id: "modernizacja-parkowej-alei",
    slug: "modernizacja-parkowej-alei",
    title: "Modernizacja parkowej alei – więcej zieleni",
    excerpt: "Ławki, oświetlenie LED i nowe nasadzenia drzew.",
    content: "Zarząd zieleni zapowiada także budki lęgowe i łąkę kwietną przy stawie...",
    cover: "images/posty/park.jpg",
    date: "2025-10-05T14:15:00+02:00",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
    tags: ["zieleń", "inwestycje"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "premiera-spektaklu-teatr-mlodych",
    slug: "premiera-spektaklu-teatr-mlodych",
    title: "Premiera spektaklu Teatru Młodych",
    excerpt: "„Mosty” – opowieść o sąsiedztwie i wspólnocie.",
    content: "Po spektaklu rozmowa z reżyserką i aktorami. Bilety do odbioru bezpłatnie w DK...",
    cover: "images/posty/teatr-mlodych.jpg",
    date: "2025-10-16T19:00:00+02:00",
    categoryId: "kultura",
    authorId: "ola-janicka",
    tags: ["teatr", "premiera"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "turniej-siatkowki-amatorow",
    slug: "turniej-siatkowki-amatorow",
    title: "Turniej siatkówki amatorów – zapisy otwarte",
    excerpt: "Drużyny 6-osobowe, finał w niedzielę.",
    content: "Zgłoszenia przez formularz MOSiR. Organizator zapewnia sprzęt i sędziowanie...",
    cover: "images/posty/siatkowka.jpg",
    date: "2025-09-21T16:45:00+02:00",
    categoryId: "sport",
    authorId: "damian-sobczak",
    tags: ["siatkówka", "turniej"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "patrole-spoleczne-na-osiedlach",
    slug: "patrole-spoleczne-na-osiedlach",
    title: "Patrole społeczne na osiedlach – pilotaż",
    excerpt: "Wspólne działania straży miejskiej i mieszkańców.",
    content: "Celem programu jest szybsza reakcja na drobne wykroczenia i poprawa bezpieczeństwa...",
    cover: "images/posty/patrol.jpg",
    date: "2025-10-03T11:30:00+02:00",
    categoryId: "interwencje",
    authorId: "piotr-wasilewski",
    tags: ["bezpieczeństwo", "osiedla"],
    readingMinutes: 3,
    featured: false,
  },
];


