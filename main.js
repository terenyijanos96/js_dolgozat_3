import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init);

function init() {
  const inputElem = document.querySelector("#szurnev");
  const inputKor = document.querySelector("#szurkor");
  inputElem.addEventListener("keyup", function () {
    let szurFeltetel = inputElem.value;
    szuresNevSzerint(KUTYALISTA, szurFeltetel);
  });

  inputKor.addEventListener("keyup", function () {
    let szurFeltetel = inputKor.value;
    szuresKorSzerint(KUTYALISTA, szurFeltetel);
  });
}

function szuresNevSzerint(lista, szurFeltetel) {
  let kesz_lista = lista.filter(function (elem) {
    let elem_nev = elem.nev.toUpperCase();
    let keresett = szurFeltetel.toUpperCase();

    return elem_nev.includes(keresett);
  });

  console.log(kesz_lista);
}

function szuresKorSzerint(lista, keresett) {
  let kesz_lista = lista.filter(function (elem) {
    return eval(elem.kor + keresett);
  });

  console.log(kesz_lista);
}
