const count = document.querySelector("#count");
const buttonAdd = document.querySelector("#add");
const buttonSubtract = document.querySelector("#subtract");
const butttonReset = document.querySelector("#reset");

var numberCounter = 0;

const addCount = () => {
  numberCounter++;
  count.textContent = numberCounter;
};

const subtractCount = () => {
  numberCounter--;
  if (numberCounter > 0) {
    count.textContent = numberCounter;
  } else {
    numberCounter = 0;
    count.textContent = numberCounter;
  }
};

const reset =() => {
  numberCounter = 0;
  count.textContent = numberCounter;


}

buttonAdd.addEventListener("click", addCount);
buttonSubtract.addEventListener("click", subtractCount);
butttonReset.addEventListener("click", reset);

