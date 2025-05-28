const prodotti = [
  {
    id: 1,
    nomeProdotto: "Insalata",
    scadenza: 1,
    quantità: 200,
    descrizione:
      "Lava e asciuga bene le foglie, poi conservale in frigorifero avvolte in un panno da cucina leggermente umido per mantenerle fresche più a lungo.",
    tipo: "verdura",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw6c7cc053/large/InsalatascarolasfusacategoriaI-2133270000000-1.jpg",
  },
  {
    id: 2,
    nomeProdotto: "Bistecca",
    scadenza: 2,
    quantità: 150,
    descrizione:
      "Conserva la bistecca in frigorifero a una temperatura tra 0°C e 4°C, preferibilmente avvolta in carta da macellaio o in un contenitore ermetico.",
    tipo: "carne",
    image: "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwd89261ca/large/costata_con_osso1.jpg",
  },
  {
    id: 3,
    nomeProdotto: "Petto di Pollo",
    scadenza: 2,
    quantità: 150,
    descrizione:
      "Riponi il petto di pollo in frigorifero entro un'ora dall'acquisto, conservandolo in un contenitore ermetico o avvolto in pellicola trasparente.",
    tipo: "carne",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw1a262da7/large/PettodiPolloafetteconfezionerisparmio-2001528000000-1.jpg",
  },
  {
    id: 4,
    nomeProdotto: "Salsiccia",
    scadenza: 1,
    quantità: 100,
    descrizione: "Conserva le salsicce in frigorifero, preferibilmente nella parte più fredda, e consumale entro la data di scadenza indicata.",
    tipo: "carne",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw3b30d213/large/Salsicciadisuinoconfinocchio-2217496000000-1.jpg",
  },
  {
    id: 5,
    nomeProdotto: "Prosciutto crudo",
    scadenza: 1,
    quantità: 80,
    descrizione: "Avvolgi il prosciutto crudo in carta oleata e conservalo in frigorifero, preferibilmente nel cassetto delle verdure.",
    tipo: "carne",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw3b24368e/large/ProsciuttoToscanoDOPTerredItaliadabanco-2115119000000-1.jpg",
  },
  {
    id: 6,
    nomeProdotto: "Mortadella",
    scadenza: 5,
    quantità: 100,
    descrizione: "Conserva la mortadella in frigorifero avvolta in pellicola trasparente o in un contenitore ermetico per mantenere la freschezza.",
    tipo: "carne",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw3977a17e/large/MORTADPISTACCHIOTDIMECPALM-2087339000000-1.jpg",
  },
  {
    id: 7,
    nomeProdotto: "Parmigiano Reggiano",
    scadenza: 30,
    quantità: 200,
    descrizione: "Avvolgi il Parmigiano in carta oleata e conservalo nella parte meno fredda del frigorifero per evitare che si secchi.",
    tipo: "formaggio",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwea2e4a11/large/ParmigianoReggianodimontagnaDOP24mesiFilieraQualitaCarrefour-2117873000000-1.jpg",
  },
  {
    id: 8,
    nomeProdotto: "Mozzarella",
    scadenza: 5,
    quantità: 125,
    descrizione: "Conserva la mozzarella nel suo liquido di governo in frigorifero e consumala entro pochi giorni dall'apertura.",
    tipo: "formaggio",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwef5fb0fc/large/Mozzarella100ItalianaGranaroloConf3pzg100Cad300g-8002670007640-1.jpg",
  },
  {
    id: 9,
    nomeProdotto: "Gorgonzola",
    scadenza: 10,
    quantità: 150,
    descrizione: "Avvolgi il Gorgonzola in carta stagnola e conservalo in frigorifero, preferibilmente nel cassetto delle verdure.",
    tipo: "formaggio",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw74faca79/large/GorgonzolaDolceDOPSfiziosodabanco-2046047000000-1.jpg",
  },
  {
    id: 10,
    nomeProdotto: "Ricotta",
    scadenza: 3,
    quantità: 250,
    descrizione: "Conserva la ricotta in frigorifero in un contenitore ermetico e consumala entro pochi giorni dall'apertura.",
    tipo: "formaggio",
    image:
      "https://www.carrefour.it/dw/image/v2/BDWP_PRD/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw22904927/large/RICOTTACRFGR250-8012666008414-1.png?sw=260&sh=260&sm=fit&sfrm=png",
  },
  {
    id: 11,
    nomeProdotto: "Provolone",
    scadenza: 20,
    quantità: 200,
    descrizione: "Avvolgi il Provolone in carta oleata e conservalo nella parte meno fredda del frigorifero per preservarne il sapore.",
    tipo: "formaggio",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwbaca7a0e/large/ScamorzaaffumicataSabellidabanco-2047221000000-1.jpg",
  },
  {
    id: 12,
    nomeProdotto: "Tonno in scatola",
    scadenza: 365,
    quantità: 80,
    descrizione: "Una volta aperta la scatoletta, trasferisci il tonno in un contenitore ermetico e conservalo in frigorifero per un massimo di 2 giorni.",
    tipo: "scatoletta",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw7d416e52/large/TONNOOOFILODOLIORMX4-8004030104006-1.png",
  },
  {
    id: 13,
    nomeProdotto: "Piselli in scatola",
    scadenza: 365,
    quantità: 400,
    descrizione: "Dopo l'apertura, trasferisci i piselli in un contenitore ermetico e conservali in frigorifero per un massimo di 2 giorni.",
    tipo: "scatoletta",
    image:
      "https://www.carrefour.it/dw/image/v2/BDWP_PRD/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw57f15aaf/large/PISELLIMEDICRF-3560071222307-1.png?sw=260&sh=260&sm=fit&sfrm=png",
  },
  {
    id: 14,
    nomeProdotto: "Fagioli in scatola",
    scadenza: 365,
    quantità: 400,
    descrizione: "Una volta aperta la scatola, trasferisci i fagioli in un contenitore ermetico e conservali in frigorifero per un massimo di 2 giorni.",
    tipo: "scatoletta",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwf2b8f97d/large/BIOFAGIOLICANNELLINICRF-8012666040131-1.png",
  },
  {
    id: 15,
    nomeProdotto: "Mais in scatola",
    scadenza: 365,
    quantità: 300,
    descrizione: "Dopo l'apertura, trasferisci il mais in un contenitore ermetico e conservalo in frigorifero per un massimo di 2 giorni.",
    tipo: "scatoletta",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwbb5a58c7/large/MAISSZUCCHEROAGGIUNTOCRF-3560071213350-1.png",
  },
  {
    id: 16,
    nomeProdotto: "Pomodori",
    scadenza: 2,
    quantità: 400,
    descrizione: "una volta acquistati inserirli in una vaschetta e metterli all'interno del frigorifero",
    tipo: "verdura",
    image:
      "https://www.carrefour.it/dw/image/v2/BDWP_PRD/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwe87a7c63/large/POMODDATTERINOSNICKELG250-8056446330005-1.png?sw=260&sh=260&sm=fit&sfrm=png",
  },
  {
    id: 17,
    nomeProdotto: "Mela",
    scadenza: 7,
    quantità: 150,
    descrizione:
      "Conserva le mele in frigorifero per prolungarne la freschezza, evitando di tenerle vicino ad altri frutti per prevenire la maturazione accelerata.",
    tipo: "frutta",
    image:
      "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw67c6fbdf/large/MeleFujiFQC1kgItaliaIcategoriacalibro80858590-2014945000000-1.jpg",
  },
  {
    id: 18,
    nomeProdotto: "Banana",
    scadenza: 5,
    quantità: 120,
    descrizione:
      "Conserva le banane a temperatura ambiente, lontano dalla luce diretta del sole, e separale da altri frutti per evitare la maturazione accelerata.",
    tipo: "frutta",
    image: "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw924aaaec/large/BANANEGR600-0000054001978-1.jpg",
  },
  {
    id: 19,
    nomeProdotto: "Arancia",
    scadenza: 10,
    quantità: 200,
    descrizione: "Conserva le arance in un luogo fresco e asciutto, lontano dalla luce diretta del sole, per mantenerle fresche più a lungo.",
    tipo: "frutta",
    image: "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwdf12850e/large/ARANCENAVELINASKG3-8058056570765-1.jpg",
  },
  {
    id: 20,
    nomeProdotto: "Kiwi",
    scadenza: 5,
    quantità: 100,
    descrizione:
      "Conserva i kiwi in frigorifero per prolungarne la freschezza, evitando di tenerli vicino ad altri frutti per prevenire la maturazione accelerata.",
    tipo: "frutta",
    image: "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw74edde6d/large/KIWISFFQC-2014946000000-1.jpg",
  },
];

export default prodotti;
