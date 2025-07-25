import glutineIcon from "../../../assets/allergeni/gluten.svg";
import fishIcon from "../../../assets/allergeni/fish.svg";
import eggIcon from "../../../assets/allergeni/egg.svg";
import milkIcon from "../../../assets/allergeni/Milk.svg";
import penautIcon from "../../../assets/allergeni/peanut.svg";
import shrimpIcon from "../../../assets/allergeni/Shrimp.svg";

const allergeniMap = {
  Glutine: {
    nome: "Glutine",
    icona: glutineIcon,
  },
  Pesce: {
    nome: "Pesce",
    icona: fishIcon,
  },
  Lattosio: {
    nome: "Lattosio",
    icona: milkIcon,
  },
  Uovo:{
    nome : "Uovo",
    icona : eggIcon
  },
  Arachidi: {
    nome : "Arachidi",
    icona : penautIcon,
  },
  Crostacei : {
    nome : "Crostacei", 
    Icona : shrimpIcon
  }
};
const ricette = [
  {
    id: 1,
    titolo: "Spaghetti al Salmone",
    ingrediente_principale: "Salmone",
    ingredienti_secondari: ["Pasta", "Panna", "Cipolle", "Olio", "Brandy", "Prezzemolo", "Pepe Nero"],
    difficolta: "molto facile",
    tempo_cottura: "20 minuti",
    calorie: 628,
    allergeni: [allergeniMap.Glutine, allergeniMap.Lattosio, allergeniMap.Pesce],
    
    descrizione: "Facile e veloce da preparare grazie a pochi ingredienti sempre pronti in dispensa, la pasta al salmone è un grande classico,",
    immagine: "https://www.giallozafferano.it/images/225-22560/Pasta-al-salmone_450x300.jpg",
    Preparazione: {
      passaggio1: "Per preparare la pasta al salmone, per prima cosa portate a bollore una pentola di acqua per cuocere la pasta e salate al bollore.",
      passaggio2: "Tagliate il salmone a striscioline 1; non riducete il salmone a pezzetti troppo piccoli altrimenti in padella si sfalderanno.",
      passaggio3: "Mondate e tritate finemente la cipolla 2, poi tritate anche il prezzemolo 3.",
      passaggio4: "Scaldate l’olio in una padella e soffriggete la cipolla ",
      passaggio5: "poi unite il salmone 5 e alzate la fiamma.",
      passaggio6: "Dopo aver saltato il salmone per qualche minuto, sfumate con il brandy 6 e lasciate evaporare completamente, poi spegnete il fuoco.",
      passaggio7: "A questo punto l’acqua sarà arrivata a bollore, quindi salate e cuocete le tagliatelle per il tempo indicato sulla confezione ",
      passaggio8: "Nel frattempo versate la panna nella padella col salmone, sempre a fuoco spento ",
      passaggio9: "Quando le tagliatelle saranno cotte, scolate e trasferitele direttamente nella padella ",
      passaggio10: "Riaccendete il fuoco e mescolate bene il tutto per far restringere il condimento",
      passaggio11: "Completate con il prezzemolo tritato e una macinata di pepe ",
      passaggio12: "e servite subito la vostra pasta al salmone affumicato",
    },
    conservazione: "E’ preferibile consumare al momento la pasta al salmone affumicato. Si sconsiglia la congelazione.",
    consiglio: "In alternativa al brandy potete sfumare con il vino bianco.",
  },
  {
    id: 2,
    titolo: "Risotto Zucchine e Gamberetti",
    ingrediente_principale: "Gamberetti",
    ingredienti_secondari: ["Riso", "Zucchine", "Cipolla", "Vino Bianco", "Brodo Vegetale", "Olio d’oliva", "Prezzemolo"],
    difficolta: "facile",
    tempo_cottura: "35 minuti",
    calorie: 480,
    allergeni:[allergeniMap.Crostacei],
    descrizione: "Un risotto cremoso e delicato, perfetto per esaltare il gusto dei gamberetti e la freschezza delle zucchine.",
    immagine: "https://www.giallozafferano.it/images/225-22568/Risotto-gamberi-e-zucchine_360x300.jpg",
    Preparazione: {
      passaggio1: "Lavate le zucchine, spuntatele e tagliatele a rondelle sottili.",
      passaggio2: "In una padella fate soffriggere la cipolla tritata con un filo d’olio.",
      passaggio3: "Aggiungete le zucchine e fatele rosolare per 5 minuti.",
      passaggio4: "Unite i gamberetti e sfumate con il vino bianco.",
      passaggio5: "In un’altra pentola fate tostare il riso con un filo d’olio.",
      passaggio6: "Aggiungete poco alla volta il brodo vegetale mescolando continuamente.",
      passaggio7: "Dopo circa 10 minuti unite le zucchine e i gamberetti al riso.",
      passaggio8: "Continuate la cottura aggiungendo brodo finché il riso sarà cremoso.",
      passaggio9: "Spegnete il fuoco, aggiustate di sale e pepe.",
      passaggio10: "Servite con prezzemolo tritato fresco sopra.",
    },
    conservazione: "Conservare in frigo per massimo 1 giorno in contenitore ermetico.",
    consiglio: "Per un gusto più deciso, potete aggiungere una spolverata di scorza di limone.",
  },
  {
    id: 3,
    titolo: "Parmigiana di Melanzane",
    ingrediente_principale: "Melanzane",
    ingredienti_secondari: ["Pomodori", "Mozzarella", "Parmigiano", "Basilico", "Olio", "Sale"],
    difficolta: "media",
    tempo_cottura: "60 minuti",
    calorie: 720,
    allergeni:[allergeniMap.Lattosio],
    descrizione: "Un piatto simbolo della tradizione italiana, a base di melanzane fritte, salsa di pomodoro e formaggio filante.",
    immagine: "https://www.giallozafferano.it/images/234-23446/Parmigiana-di-melanzane_650x433_wm.jpg",
    Preparazione: {
      passaggio1: "Lavate le melanzane e tagliatele a fette di circa 1 cm.",
      passaggio2: "Cospargetele di sale e lasciatele riposare per 30 minuti per eliminare l’amaro.",
      passaggio3: "Friggete le melanzane in olio caldo fino a doratura.",
      passaggio4: "Preparate il sugo facendo cuocere i pomodori pelati con olio e basilico.",
      passaggio5: "In una teglia stendete uno strato di sugo, uno di melanzane, mozzarella e parmigiano.",
      passaggio6: "Ripetete gli strati fino a terminare gli ingredienti.",
      passaggio7: "Cuocete in forno statico a 180° per circa 30 minuti.",
      passaggio8: "Lasciate intiepidire prima di servire per far compattare gli strati.",
    },
    conservazione: "Conservare in frigorifero per 2 giorni. Si può anche congelare.",
    consiglio: "Potete grigliare le melanzane al posto di friggerle per una versione più leggera.",
  },
  {
    id: 4,
    titolo: "Polpette di Ricotta e Spinaci",
    ingrediente_principale: "Ricotta",
    ingredienti_secondari: ["Spinaci", "Uova", "Parmigiano", "Pangrattato", "Noce Moscata"],
    difficolta: "facile",
    tempo_cottura: "30 minuti",
    calorie: 410,
    allergeni: [allergeniMap.Glutine, allergeniMap.Lattosio , allergeniMap.Uovo],
    descrizione: "Polpette vegetariane gustose e leggere, perfette per un secondo piatto nutriente.",
    immagine: "https://www.giallozafferano.it/images/232-23296/Polpette-di-spinaci-e-ricotta_360x300.jpg",
    Preparazione: {
      passaggio1: "Lessate gli spinaci e strizzateli bene.",
      passaggio2: "In una ciotola unite ricotta, spinaci tritati, uova e parmigiano.",
      passaggio3: "Aggiungete sale, pepe e un pizzico di noce moscata.",
      passaggio4: "Amalgamate bene e formate delle polpette.",
      passaggio5: "Passatele nel pangrattato.",
      passaggio6: "Disponetele su una teglia con carta forno.",
      passaggio7: "Cuocete in forno a 180° per 20 minuti girandole a metà cottura.",
      passaggio8: "Servite calde o tiepide con contorno a piacere.",
    },
    conservazione: "Conservare in frigo per massimo 2 giorni in contenitore chiuso.",
    consiglio: "Per una versione più croccante, potete friggerle invece di cuocerle al forno.",
  },
  {
    id: 5,
    titolo: "Frittata con Patate e Cipolle",
    ingrediente_principale: "Uova",
    ingredienti_secondari: ["Patate", "Cipolle", "Olio d'oliva", "Sale", "Pepe"],
    difficolta: "facile",
    tempo_cottura: "25 minuti",
    calorie: 520,
    allergeni:[allergeniMap.Uovo],
    descrizione: "Un secondo piatto semplice e tradizionale, perfetto anche per un pranzo fuori casa.",
    immagine: "https://www.giallozafferano.it/images/268-26885/Frittata-di-patate-e-cipolle_450x300.jpg",
    Preparazione: {
      passaggio1: "Sbucciate e tagliate le patate a fettine sottili.",
      passaggio2: "Affettate le cipolle e fatele rosolare in padella con l’olio.",
      passaggio3: "Aggiungete le patate e cuocetele finché saranno morbide.",
      passaggio4: "In una ciotola sbattete le uova con sale e pepe.",
      passaggio5: "Unite le patate e le cipolle alle uova.",
      passaggio6: "Versate il composto in padella e cuocete a fuoco basso.",
      passaggio7: "Girate la frittata aiutandovi con un piatto.",
      passaggio8: "Terminate la cottura e servite calda o a temperatura ambiente.",
    },
    conservazione: "Può essere conservata in frigorifero per 1 giorno.",
    consiglio: "Aggiungete del parmigiano grattugiato per renderla ancora più saporita.",
  },
  {
    id: 6,
    titolo: "Insalata di Riso Estiva",
    ingrediente_principale: "Riso",
    ingredienti_secondari: ["Mais", "Piselli", "Tonno", "Olive", "Pomodori"],
    difficolta: "facile",
    tempo_cottura: "20 minuti",
    calorie: 450,
    allergeni: [allergeniMap.Pesce],
    descrizione: "Fresca, colorata e saporita: perfetta per le giornate calde.",
    immagine: "https://www.giallozafferano.it/images/photocomments/17969/thumbs/277041.jpeg",
    Preparazione: {
      passaggio1: "Cuocete il riso in abbondante acqua salata.",
      passaggio2: "Scolatelo al dente e lasciatelo raffreddare.",
      passaggio3: "Tagliate a dadini i pomodori.",
      passaggio4: "Unite in una ciotola mais, piselli e tonno sgocciolato.",
      passaggio5: "Aggiungete le olive e i pomodori.",
      passaggio6: "Versate il riso raffreddato e mescolate.",
      passaggio7: "Condite con olio, sale e pepe.",
      passaggio8: "Lasciate riposare in frigo almeno un’ora prima di servire.",
    },
    conservazione: "Conservare in frigo per massimo 2 giorni.",
    consiglio: "Potete aggiungere cubetti di formaggio o uova sode per arricchirla.",
  },
  {
    id: 7,
    titolo: "Toast",
    ingrediente_principale: "Prosciutto crudo",
    ingredienti_secondari: ["Mozzarella", "Pane", "Burro"],
    difficolta: "molto facile",
    tempo_cottura: "10 minuti",
    calorie: 380,
    allergeni: [allergeniMap.Glutine, allergeniMap.Lattosio],
    descrizione: "Un toast saporito e filante, ideale per una pausa pranzo veloce ma soddisfacente.",
    immagine: "https://www.giallozafferano.it/images/169-16962/Grilled-cheese-sandwich_360x300.jpg",
    Preparazione: {
      passaggio1: "Scaldate una padella antiaderente.",
      passaggio2: "Imburrate leggermente le fette di pane da entrambi i lati.",
      passaggio3: "Disponete una fetta di prosciutto e una di mozzarella tra due fette di pane.",
      passaggio4: "Cuocete il toast in padella a fuoco medio.",
      passaggio5: "Premete leggermente per far sciogliere la mozzarella.",
      passaggio6: "Girate il toast e fate dorare anche l’altro lato.",
      passaggio7: "Una volta dorato e filante, togliete dal fuoco.",
      passaggio8: "Servite caldo con una spolverata di pepe.",
    },
    conservazione: "Consumare subito. Non adatto alla conservazione.",
    consiglio: "Aggiungete pomodoro a fette per una variante più fresca.",
  },
  {
    id: 8,
    titolo: "Salsiccia e Fagioli",
    ingrediente_principale: "Salsiccia",
    ingredienti_secondari: ["Fagioli in scatola", "Pomodori", "Cipolla", "Peperoncino"],
    difficolta: "facile",
    tempo_cottura: "35 minuti",
    calorie: 610,
    allergeni: ["può contenere tracce di glutine"],
    descrizione: "Un piatto rustico e saporito, ideale per le giornate fredde.",
    immagine: "https://www.giallozafferano.it/images/240-24065/Salsiccia-e-fagioli_450x300.jpg",
    Preparazione: {
      passaggio1: "Affettate la cipolla e fatela rosolare in padella con un filo d’olio.",
      passaggio2: "Aggiungete la salsiccia sbriciolata e fate cuocere per 10 minuti.",
      passaggio3: "Unite i pomodori tagliati a cubetti.",
      passaggio4: "Aggiungete i fagioli scolati e sciacquati.",
      passaggio5: "Insaporite con sale, pepe e peperoncino a piacere.",
      passaggio6: "Coprite e lasciate cuocere a fuoco medio per 15 minuti.",
      passaggio7: "Scoprite e fate restringere il sugo per qualche minuto.",
      passaggio8: "Servite caldo con pane casereccio.",
    },
    conservazione: "Si conserva in frigorifero per 1 giorno.",
    consiglio: "Ottimo anche con un filo d’olio a crudo e rosmarino fresco.",
  },
  {
    id: 9,
    titolo: "Caprese con Pomodori e Provolone",
    ingrediente_principale: "Pomodori",
    ingredienti_secondari: ["Provolone", "Basilico", "Olio", "Origano", "Sale"],
    difficolta: "molto facile",
    tempo_cottura: "5 minuti",
    calorie: 290,
    allergeni: [allergeniMap.Lattosio],
    descrizione: "Una variante della classica caprese, con provolone al posto della mozzarella.",
    immagine: "https://www.giallozafferano.it/images/5-591/Caprese-sfiziosa-con-salsa-all-origano_360x300.jpg",
    Preparazione: {
      passaggio1: "Tagliate i pomodori a fette spesse.",
      passaggio2: "Affettate anche il provolone.",
      passaggio3: "Disponete pomodori e provolone alternati su un piatto.",
      passaggio4: "Aggiungete foglie di basilico fresco.",
      passaggio5: "Condite con un filo d’olio d’oliva.",
      passaggio6: "Spolverate con sale e origano.",
      passaggio7: "Lasciate riposare 5 minuti per insaporire.",
      passaggio8: "Servite fresca come antipasto o contorno.",
    },
    conservazione: "Consumare subito per mantenere la freschezza.",
    consiglio: "Ottima anche con l’aggiunta di olive nere o capperi.",
  },
];

export default ricette;
