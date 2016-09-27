
var orderStatus = document.getElementById("orderStatus");

var orderButton = document.getElementById("orderButton");
var lemonCounter = document.getElementById("lemonCounter")


document.getElementById("orderButton").addEventListener("click", function(event) {
	document.getElementById("orderButton").style.display = 'none';
	console.log('you clicked Lemon')
	lemonCounter.innerHTML = "1 cookie ordered";

})