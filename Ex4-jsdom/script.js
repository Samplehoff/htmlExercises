var myButton = document.getElementById("myButton");
var boxes = document.querySelectorAll(".box")

myButton.addEventListener("click", function () {
    console.log("here")
    boxes.forEach(box => box.style.backgroundColor = "blue")
})