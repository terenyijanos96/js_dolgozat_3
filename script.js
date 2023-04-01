window.addEventListener("load", init);

function init() {
  const OK = document.querySelector("input[type=button]#ok");
  const INPUTOK = document.querySelectorAll("input");

  OK.addEventListener("click", function () {
    let obj = adatgyujt(INPUTOK);
    osszeallit(obj);
  });
}

function adatgyujt(html_lista) {
  let nev_ertek = html_lista[0].value;
  let cim_ertek = html_lista[1].value;
  let tel_ertek = html_lista[2].value;
  let email_ertek = html_lista[3].value;

  return { nev: nev_ertek, cim: cim_ertek, tel: tel_ertek, email: email_ertek };
}

function osszeallit(obj) {
  const SECTION = document.querySelector("section");

  for (const key in obj) {
    let div = document.createElement("div");
    SECTION.appendChild(div);
    let p = document.createElement("p");
    div.appendChild(p).innerHTML = obj[key];
  }
}
