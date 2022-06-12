













const openPopUp1 = document.getElementById('open_popup1');
const openPopUp2 = document.getElementById('open_popup2');
const openPopUp3 = document.getElementById('open_popup3');
const closePopUp = document.getElementById('close_popup');
const PopUp = document.getElementById('popup');

openPopUp1.addEventListener('click', function (e) {
  e.preventDefault();
  PopUp.classList.add('active');
})
openPopUp2.addEventListener('click', function (e) {
  e.preventDefault();
  PopUp.classList.add('active');
})
openPopUp3.addEventListener('click', function (e) {
  e.preventDefault();
  PopUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  PopUp.classList.remove('active')
})

const bg = document.getElementById('bg');
const mn = document.getElementById('mn');
const ss1 = document.getElementById('link1');
const ss2 = document.getElementById('link2');
const ss3 = document.getElementById('link3');
const ss4 = document.getElementById('link4');
const ss5 = document.getElementById('link5');
const ss6 = document.getElementById('link6');
const ss7 = document.getElementById('link7');

ss1.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})
ss2.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})
ss3.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})
ss4.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})
ss5.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})
ss6.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})
ss7.addEventListener('click', function (e) {
  e.preventDefault();
  bg.classList.remove('active');
  mn.classList.remove('active');
})