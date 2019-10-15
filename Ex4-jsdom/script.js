var myButton = document.getElementById("myButton");
var boxes = document.querySelectorAll(".box")

myButton.addEventListener("click", function () {
    
    boxes.forEach(box => box.style.backgroundColor = "blue")
})