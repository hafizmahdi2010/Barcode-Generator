let button = document.querySelector("#generateBtn");
let input = document.querySelector("#inputText");
let image = document.querySelector(".barCodeImg");

button.addEventListener("click", () => {
  if(input.value == ""){
    alert("You Must Right Somthing !");
    input.focus();
  }
  else{
    let text = input.value;
    image.src = `https://barcode.tec-it.com/barcode.ashx?data=${text}`;
  }
})