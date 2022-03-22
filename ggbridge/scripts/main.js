let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ggb-transparent.png') {
        myImage.setAttribute('src', 'images/ggb-invert-transparent.png');
    } else {
        myImage.setAttribute('src', 'images/ggb-transparent.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}