//Index button resize

function resizeButton() {
    var button = document.getElementById("yesButton");
    var currentFontSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
    var currentPadding = parseFloat(window.getComputedStyle(button, null).getPropertyValue('padding').split(' ')[0]);
    
    // Increase the font size and padding
    var newFontSize = currentFontSize + 2; // Increase font size by 2 pixels
    var newPadding = currentPadding + 5; // Increase padding by 5 pixels
    
    // Apply the new size and padding to the button
    button.style.fontSize = newFontSize + 'px';
    button.style.padding = newPadding + 'px ' + (currentPadding + 10) + 'px'; // Increase horizontal padding by 10 pixels
  }

function riddle1() {
  window.alert
    window.open("riddle1.html", "_self")
}

//Question 1:

function resizeQuestion1() {
    var button = document.getElementById("meButton");
    var currentFontSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
    var currentPadding = parseFloat(window.getComputedStyle(button, null).getPropertyValue('padding').split(' ')[0]);
    
    var newFontSize = currentFontSize + 2;
    var newPadding = currentPadding + 5;
    
    button.style.fontSize = newFontSize + 'px';
    button.style.padding = newPadding + 'px ' + (currentPadding + 10) + 'px';
  }

function riddle2() {
  window.open("riddle2.html", "_self")
}

//Question 2:

function resizeQuestion2() {
  var button = document.getElementById("winButton");
  var currentFontSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
  var currentPadding = parseFloat(window.getComputedStyle(button, null).getPropertyValue('padding').split(' ')[0]);
  
  var newFontSize = currentFontSize + 2;
  var newPadding = currentPadding + 5;
  
  button.style.fontSize = newFontSize + 'px';
  button.style.padding = newPadding + 'px ' + (currentPadding + 10) + 'px';
}

function riddle3() {
window.open("riddle3.html", "_self")
}

//Question 3:

function resizeQuestion3() {
  var button = document.getElementById("youButton");
  var currentFontSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
  var currentPadding = parseFloat(window.getComputedStyle(button, null).getPropertyValue('padding').split(' ')[0]);
  
  var newFontSize = currentFontSize + 2;
  var newPadding = currentPadding + 5;
  
  button.style.fontSize = newFontSize + 'px';
  button.style.padding = newPadding + 'px ' + (currentPadding + 10) + 'px';
}

function riddle4() {
window.open("riddle4.html", "_self")
}

//Question 4:

function riddle5() {
window.open("5.html", "_self")
}

function nah() {
  window.open("index.html", "_self")
}

//Question 5:

function page6() {
  window.open("6.html", "_self")
}

//Question 6:

function page7() {
  window.open("7.html", "_self")
}

//Page 7:

function noway() {
  var button = document.getElementById("goofyButton");
  var currentFontSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
  var currentPadding = parseFloat(window.getComputedStyle(button, null).getPropertyValue('padding').split(' ')[0]);
  
  var newFontSize = currentFontSize + 2;
  var newPadding = currentPadding + 5;
  
  button.style.fontSize = newFontSize + 'px';
  button.style.padding = newPadding + 'px ' + (currentPadding + 10) + 'px';
}

function goofy() {
  window.open("index.html", "_self")
}
