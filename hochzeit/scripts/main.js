let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bild.png') {
      myImage.setAttribute('src','images/bild2.png');
    } else {
      myImage.setAttribute('src','images/bild.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'SAVE THE DATE, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'SAVE THE DATE, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }