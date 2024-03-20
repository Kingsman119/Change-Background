const btn = document.getElementById("btn");
let hex = document.getElementById("hexCode");
console.log("working")

function randomClr() {
  let letters = "123456789ABCDEF";
  let clr = "#";
  for (let i = 0; i < 6; i++) {
    clr += letters[Math.floor(Math.random() * 16)];
  }
  return clr;
}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomClr();
    hexCode.innerHTML = randomClr();
  });