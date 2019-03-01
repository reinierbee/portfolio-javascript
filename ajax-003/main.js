var btn = document.querySelector("#btn");
var priceDisplay = document.querySelector("#price");
var prevPrice = 0;


function getPrice(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var price = JSON.parse(XHR.responseText).bpi.EUR.rate_float;
      priceDisplay.innerText = "\u20ac" + price;

      if (price > prevPrice) {
        priceDisplay.style.color = "green";
      }
      else if (price == prevPrice) {
        priceDisplay.style.color = "grey";
      } else {
        priceDisplay.style.color = "red";
      }

      prevPrice = price;
    }
  }

  XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
}

btn.addEventListener("click", function(){
  getPrice();
});

getPrice();
setInterval(function(){getPrice();}, 10000);
