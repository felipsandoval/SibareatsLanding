var bubblyButtons = document.getElementById("bubbly-button");
bubblyButtons.addEventListener('click', animateButton)

function animateButton(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

function OpenIG(){
    window.open("https://www.instagram.com/lossibareats/")
}

function OpenRouteSanchi(){
    window.open("https://goo.gl/maps/uSz94Q75HmPL1mwu6")
}

function OpenRouteCentro(){
    window.open("https://goo.gl/maps/WRkwbqnAxPX91wnY7")
}

function OpenRouteChamberi(){
    window.open("https://goo.gl/maps/hcMNmqnHJQ2cbnkC7")
}

function OpenRouteChamberi(){
    window.open("https://goo.gl/maps/g2XKXaAxvz9ahWW27")
}