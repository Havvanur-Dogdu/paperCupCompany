const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
if(hamburger && hamburger != undefined){
    hamburger.addEventListener('click', ()=>{
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
}

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-red";
}

/*window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});*/

var myVar;
const slides = document.querySelectorAll('.slide');
const paperCup = document.getElementById('paperCup');
const hotDrink = document.getElementById('hotDrink');
const coldDrink = document.getElementById('coldDrink');



const getSlider = (index) => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    slides[index].classList.add("active");
}


if(paperCup && paperCup != undefined){
    paperCup.addEventListener('click', () => {
        getSlider(0)
    });
}
if(hotDrink && hotDrink != undefined){
    hotDrink.addEventListener('click', () => {
        getSlider(1)
    });
}

if(coldDrink && coldDrink != undefined){
    coldDrink.addEventListener('click', () => {
        getSlider(2)
    });
}

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loading_id").style.display = "none";
    document.getElementById("loader-buttons").style.display = "flex";
    document.getElementById("myDiv").style.display = "block";
    slides[0].classList.add('active');
}

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


var hotCup = document.getElementById('hotCup')
var coldCup = document.getElementById('coldCup')

if(hotCup && hotCup != undefined){
    hotCup.addEventListener("click", () => {
        document.location = "hotDrinkCup.html"
    })
}

if(coldCup && coldCup != undefined){
    coldCup.addEventListener("click", () => {
        document.location = "coldDrinkCup.html"
    })
}


/* İmage gallery*/
/*$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});*/


