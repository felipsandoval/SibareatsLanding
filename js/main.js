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