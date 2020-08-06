if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

var result = 0;
var total = 0;

function Add(val){
    total += val;
    result = total;
}

function Divid(val){
    result /= val;
    result = total;
}

function Multiply(val){
    result *= val;
    result = total;
}

function Subtract(val){
    result -= val;
    result = total;
}
