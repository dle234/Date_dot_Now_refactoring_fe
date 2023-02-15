const calculateButton = document.querySelector(".calculate-button");
const timeResult = document.querySelector(".calculate-result-time");
const costResult = document.querySelector(".calculate-result-cost");

function calculate() {
  const timeList = document.querySelectorAll(".corab-time");
  const costList = document.querySelectorAll(".corab-cost");

  let timeSum = 0;
  let costSum = 0;

  timeList.forEach((time) => {timeSum += Math.floor(time.value)});
  costList.forEach((cost) => {costSum += Math.floor(cost.value)});

  timeResult.innerText=timeSum;
  costResult.innerText=costSum;
}

calculateButton.addEventListener("click", calculate);