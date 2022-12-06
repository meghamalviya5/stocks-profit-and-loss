var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var tellMeBtn = document.querySelector("#tell-me-btn");
var outputBox = document.querySelector("#output");

tellMeBtn.addEventListener("click", calculateProfitOrLoss);

function calculateProfitOrLoss() {
  var initialPriceValue = Number(initialPrice.value);
  var stocksQuantityValue = Number(stocksQuantity.value);
  var currentPriceValue = Number(currentPrice.value);
  var message = "";
  if (currentPriceValue > initialPriceValue) {
    var profit = (currentPriceValue - initialPriceValue) * stocksQuantityValue;
    var profitPercentage = (profit / initialPriceValue) * 100;
    message = `Hey the profit is ${profit} and the percentage is ${profitPercentage}%`;
  } else if (currentPriceValue < initialPriceValue) {
    var loss = (initialPriceValue - currentPriceValue) * stocksQuantityValue;
    var lossPercentage = (loss / initialPriceValue) * 100;
    message = `Hey the loss is ${loss} and the percentage is ${lossPercentage}%`;
  } else {
    message = "No pain no gain and no gain no pain";
  }
  console.log(message);
  showMessage(message);
}

function showMessage(message) {
  outputBox.innerText = message;
}
