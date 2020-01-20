let menukaart = [
  "Spaghetti met ham en kaas",
  "Macaroni met ham en kaas",
  "Tagliatelli met ham en kaas",
  "Spaghetti met spinazie en room",
  "Macaroni met spinazie en room",
  "Tagliatelli met spinazie en room",
  "Spaghetti met gehakt-tomatensaus en kaas",
  "Macaroni met gehakt-tomatensaus en kaas",
  "Tagliatelli met gehakt-tomatensaus en kaas ",
  "Spaghetti met spekjes, spinazie en room",
  "Macaroni met spekjes, spinazie en room",
  "Tagliatelli met spekjes, spinazie en room",
  "Spaghetti met courgette en tomatensaus",
  "Macaroni met courgette en tomatensaus",
  "Tagliatelli met courgette en tomatensaus",
  "Lasagne met courgette en tomatensaus",
  "Lasagne met room, doperwten en tomatensaus",
  "Lasagne met spinazie en tomatensaus en kaas"
];

menu();
functie(2);
showInfo(2, 10);

function menu() {
  for (let i = 0; i < menukaart.length; i++) {
    console.log(menukaart[i]);
  }
}

function functie(number) {
  console.log(menukaart[number]);
}
function showInfo(start, eind) {
  for (let i = start; i < eind; i++) {
    console.log(menukaart[i]);
  }
}
console.log(waarde("Heerlijk"));
let menukaart1 = waarde("Heerlijk");
function waarde(name) {
  return "dit recept is " + name;
}
