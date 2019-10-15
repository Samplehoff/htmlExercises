// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let displayingSection = true;

///*
let sectionHeader = document.getElementById("section-header");
sectionHeader.addEventListener("click", function() {
  //let section = document.getElementById(section);
  //section.style.display = "none";
  sectionHeaderClicked();
});
//*/

function sectionHeaderClicked(){
  let section = document.getElementById("section");
  
  if (displayingSection) {
    section.style.display = "none";
    displayingSection = false;
  } else {
    section.style.display = "block";
    displayingSection = true;
  }

}