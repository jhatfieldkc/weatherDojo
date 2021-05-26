var acceptCookies = document.querySelector("#cookies");

var cityPop = document.querySelector(".city");

// var tempChangeF = document.querySelectorAll("#temperature");

var highs = document.querySelectorAll(".highs");
var lows = document.querySelectorAll(".lows");

function accept() {
  acceptCookies.remove();
}

function cityAlert() {
  alert("Loading Weather Report");
}

function temp(element) {
  if (element.value == "C") {
    for (var i = 0; i < highs.length; i++) {
      highs[i].innerText =
        Math.round((10 * ((parseInt(highs[i].innerHTML) - 32) * 5)) / 9) / 10;
      lows[i].innerText =
        Math.round((10 * ((parseInt(lows[i].innerHTML) - 32) * 5)) / 9) / 10;
    }
  } else {
    for (var i = 0; i < highs.length; i++) {
      highs[i].innerText = Math.round(
        (10 * (parseFloat(highs[i].innerHTML) * 1.8 + 32)) / 10
      );
      lows[i].innerText = Math.round(
        (10 * (parseFloat(lows[i].innerHTML) * 1.8 + 32)) / 10
      );
    }
  }
}
