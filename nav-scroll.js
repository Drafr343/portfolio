let screen = document.querySelector(".one");
let home = document.querySelector(".home");
let work = document.querySelector(".work");
let artbtn = document.querySelector(".artbtn");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
var ofh = 0;
var weight = function(){
ofh = screen.offsetHeight;
var homef = function(){
  home.classList.add("active");
  work.classList.remove("active");
  artbtn.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");
}
var workf = function(){
  work.classList.add("active");
  home.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");
}
var artbtnf = function(){
  artbtn.classList.add("active");
  home.classList.remove("active");
  work.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");
}
var aboutf = function(){
  about.classList.add("active");
  home.classList.remove("active");
  work.classList.remove("active");
  artbtn.classList.remove("active");
  contact.classList.remove("active");
}
var contactf = function(){
  contact.classList.add("active");
  home.classList.remove("active");
  work.classList.remove("active");
  artbtn.classList.remove("active");
  about.classList.remove("active");
}

if(window.scrollY<=ofh){homef();}
if(window.scrollY>=(ofh - (ofh/9))){workf();}
if(window.scrollY>=ofh*3 - (ofh/9)){artbtnf();}
if(window.scrollY>=(ofh*5 - (ofh/4))){aboutf();}
if(window.scrollY>=(ofh*6 - (ofh/6))){contactf();}
}
setInterval(weight, 150)

home.addEventListener('click', () => {
  window.scroll(0, 0);
});
work.addEventListener('click', () => {
  window.scroll(0, ofh - (ofh/11));
});
artbtn.addEventListener('click', () => {
  window.scroll(0, ofh * 3 - (ofh/11));
});
about.addEventListener('click', () => {
  window.scroll(0, ofh*4.9 - (ofh/11));
});
contact.addEventListener('click', () => {
  window.scroll(0, ofh*6);
});
