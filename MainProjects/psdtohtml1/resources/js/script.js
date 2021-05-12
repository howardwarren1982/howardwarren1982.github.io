// Makes width grow up to the max px seting
const growWidthePx = function(cssSelectorString, speed){

  const element = document.querySelector(cssSelectorString);
  const style = window.getComputedStyle(element);

  element.animate([
    { // from
      width: "0px"

    },
    { // to
      width: style.getPropertyValue('width')
    }
  ], speed);
};


// Makes height grow up to the max px seting
const growHeightPx = function(cssSelectorString, speed){

  const element = document.querySelector(cssSelectorString);
  const style = window.getComputedStyle(element);

  element.animate([
    { // from
      height: "0px"
    },
    { // to
      height: style.getPropertyValue('height')
    }
  ], speed);
};

// Makes height shrink to min and then set display to none

const shrinkHeightPx = function(cssSelectorString, speed){

  const element = document.querySelector(cssSelectorString);
  const style = window.getComputedStyle(element);

  element.animate([
    { // from
      height: style.getPropertyValue('height')
    },
    { // to
      height: "0px"
    }
  ], speed);

};




//Can make a function
//dropdown Logic

let dropdownButton = document.querySelector('.dropdown-btn')

let elementDropDown = document.querySelector('.hidden-dropdown');
let styleDropDown = window.getComputedStyle(elementDropDown);

dropdownButton.addEventListener("click", function(){
  if(styleDropDown.getPropertyValue('display') ==  "none"){
    growHeightPx('.box-dropdown', 300);
    document.querySelector('.hidden-dropdown').style.display = "block";
  }else {
    shrinkHeightPx('.box-dropdown', 300);
    document.querySelector('.hidden-dropdown').style.display = "none";
  }
})

//responsive dropdown Logic

let resDropdownButton = document.querySelector('.res-dropbtn')

let resElementDropDown = document.querySelector('.res-hidden-dropdown');
let resStyleDropDown = window.getComputedStyle(resElementDropDown);

resDropdownButton.addEventListener("click", function(){
  if(resStyleDropDown.getPropertyValue('display') ==  "none"){
    growHeightPx('.res-dropdown-content', 30);
    document.querySelector('.res-hidden-dropdown').style.display = "block";
  }else {
    shrinkHeightPx('.res-dropdown-content', 30);
    document.querySelector('.res-hidden-dropdown').style.display = "none";
  }
})
