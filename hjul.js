// lykkehjul

const hjul = document.querySelector("#hjul");

hjul.addEventListener("click", hjulDrej);

function hjulDrej() {
  console.log("hej");
  document.querySelector("#hjul").classList.toggle("drej");
}
