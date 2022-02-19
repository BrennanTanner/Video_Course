const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);

function togglePosterView(){
  if (document.getElementById('overlay1').style.visibility =='visible'){
    document.getElementById('overlay1').style.visibility='hidden';
  }
  else{
  document.getElementById('overlay1').style.visibility='visible';
  document.getElementById('overlay2').style.visibility='hidden';
  document.getElementById('overlay3').style.visibility='hidden';
}
};

function toggleShirtView(){
  if (document.getElementById('overlay2').style.visibility =='visible'){
    document.getElementById('overlay2').style.visibility='hidden';
  }
  else{
  document.getElementById('overlay1').style.visibility='hidden';
  document.getElementById('overlay2').style.visibility='visible';
  document.getElementById('overlay3').style.visibility='hidden';
  }
};

function toggleStickerView(){
  if (document.getElementById('overlay3').style.visibility =='visible'){
    document.getElementById('overlay3').style.visibility='hidden';
  }
  else{
  document.getElementById('overlay1').style.visibility='hidden';
  document.getElementById('overlay2').style.visibility='hidden';
  document.getElementById('overlay3').style.visibility='visible';
  }
};