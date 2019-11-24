// Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});

// Slider
$(document).ready(function(){
$('.thing').slick({
    dots: true,
    arrows:true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          rows: 2,  
          sllidesPerRow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
  })
});

// Za Date i Window
let h2 = document.querySelector('h2');
//dodajem event listener za tekst na stranici galerija
h2.addEventListener('click', (ev) => {

    let options = 'statusbar=no, height=500, width=800'; //veličina prozora
    //koja stranica se otvara u novom prozoru i kako se zove
    let ref = window.open('kontakt.html', 'Kontakt', options);

});

var countDownDate = new Date("Nov 29, 2019 00:00:00").getTime();

// Updejtovaće tajmer na svakih sekund
var x = setInterval(function() {

  // Uzima današnji datum
  var now = new Date().getTime();

  // Nađi razmak između današnjeg datuma i postavljenog datuma
  var distance = countDownDate - now;

  // Računa koliko ima još vremena za dane,sate i minute
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Ispisuje dobijeni rezultat u "timer"-u
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Ako je odbrojavanje završeno ispisaće tekst
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Sniženje je počelo!";
  }
}, 1000);


//Datum
var currentDate = new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var fullDate = day + "/" + month + "/" + year;
document.getElementById('date').innerHTML = fullDate;
// document.getElementById('date').innerHTML = currentDate.toDateString();