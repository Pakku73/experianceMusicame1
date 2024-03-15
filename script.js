// const textFade1 = document.querySelectorAll(".p2");

// document.addEventListener("scroll", function(){
//     textFade1.forEach((text) =>{
//         if(isInView(text)){
//             textFade1.classList.add("p2--visible");
//         }
//     });
// });

// function isInView(element){
//     const rect = element.getBoundingClientRect();
//     return  (
//         rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
//     );
// }

// function typing1(){
//     const elm = document.getElementById("p2-2");
//     var newone = elm.cloneNode(true);
//     elm.parentNode.replaceChild(newone, elm);
// }

// function loop1(){
//     while(true){
//         const elm = document.getElementById("p2-2");
//         var newone = elm.cloneNode(true);
//         elm.parentNode.replaceChild(newone, elm);
//         setTimeout(loop1, 8000);
//     }

// }


//#### TYPER LOOP ####

const text = document.querySelector(".p2")

function loop1(){
    const elm = document.getElementById("p2-2");
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
    setTimeout(loop1, 8000);
}



const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Bon j'ai réussi à survivre mais c'est pas sans séquelles...";
    }, 0);
}

textLoad();
setInterval(textLoad, 10000);

setTimeout(loop1, 0)


//SCROLL TO SECTION
function scrollToSection(sectionId) { 
  var section = document.getElementById(sectionId); 
  section.scrollIntoView({ behavior: 'smooth' }); 
} 

//SCROLL CHANGE TEXT
$(window).scroll(function() {
  $("section .cover-text1").each(function() {
    var marginTop = $(window).scrollTop() - $(this).parent().position().top;
    $(this).css({
      'margin-top': marginTop
    });
  });
});

$(window).scroll(function() {
  $("section .cover-text2").each(function() {
    var marginTop = $(window).scrollTop() - $(this).parent().position().top;
    $(this).css({
      'margin-top': marginTop
    });
  });
});


// FADE IN UP
const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fadeInUp");
      } else {
        element.classList.remove("fadeInUp");
      }
    });
  });
} 


// FADE IN UP 2
const elementsToFadeInUpOnScroll2 = document.querySelectorAll(".fade-in-up2");
if (elementsToFadeInUpOnScroll2) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll2.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("opacity0")
        setTimeout(() => {
          element.classList.remove("opacity0")
          element.classList.add("fadeInUp");
        }, 500);
      } else {
        element.classList.remove("fadeInUp");
      }
    });
  });
} 

// FADE IN UP 3
const elementsToFadeInUpOnScroll3 = document.querySelectorAll(".fade-in-up3");
if (elementsToFadeInUpOnScroll3) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll3.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("opacity0")
        setTimeout(() => {
          element.classList.remove("opacity0")
          element.classList.add("fadeInUp");
        }, 800);
      } else {
        element.classList.remove("fadeInUp");
      }
    });
  });
} 


// FADE IN LEFT
const elementsToFadeInLeftOnScroll = document.querySelectorAll(".fade-in-left");
if (elementsToFadeInLeftOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInLeftOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fadeInLeft");
      } else {
        element.classList.remove("fadeInLeft");
      }
    });
  });
} 

// FADE IN RIGHT
const elementsToFadeInRightOnScroll = document.querySelectorAll(".hr_underline");
if (elementsToFadeInRightOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInRightOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("hrCenter");
      } else {
        element.classList.remove("hrCenter");
      }
    });
  });
} 


// UNDERLINE CENTER
const underC = document.querySelectorAll(".fade-in-right");
if (underC) {
  window.addEventListener("scroll", function(event) {
    underC.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fadeInRight");
      } else {
        element.classList.remove("fadeInRight");
      }
    });
  });
} 


//VIDEO PLAYED ON SCROLL
const colorSplash = document.querySelectorAll(".backgroundVideo");
if (colorSplash) {
  window.addEventListener("scroll", function(event) {
    colorSplash.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        document.querySelector('.backgroundVideo').play();
      } else {
        element.classList.remove(".vid1");
      }
    });
  });
} 

const dropMoney = document.querySelectorAll(".backgroundVideo3");
if (dropMoney) {
  window.addEventListener("scroll", function(event) {
    dropMoney.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        document.querySelector('.backgroundVideo3').play();
      } else {
        element.classList.remove(".vid1");
      }
    });
  });
} 


// const transConc = document.querySelectorAll(".vid2");
// if (transConc) {
//   window.addEventListener("scroll", function(event) {
//     transConc.forEach(function(element) {
//       if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
//         document.querySelector('.vid2').play();
//         element.classList.remove(".vid2");
//       }
//     });
//   });
// } 




let conclusion = document.querySelectorAll(".backgroundVideo4");

document.addEventListener("scroll", function(){
  conclusion.forEach((text) =>{
        if(isInView(text)){
          document.querySelector('.backgroundVideo4').play();
          conclusion = "stri"
        }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return  (
        rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}






// const vid3 = document.querySelectorAll(".backgroundVideo3");
// if (vid3) {
//   window.addEventListener("scroll", function(event) {
//     elementsToPlayOnScroll.forEach(function(element) {
//       if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
//         document.querySelector('backgroundVideo3').play();
//       } else {
//         element.classList.remove(".vid1");
//       }
//     });
//   });
// } 


//#### SHOW COMPLETE DESCRIPTION

//SECOND
//Gangnam style
const btn = document.getElementById("hiddenBTN");
const div = document.getElementById("details");

function togg(){
    if(getComputedStyle(div).display != "none"){
        btn.textContent = "Description complète";
        div.style.display = "none";
    } else {
        btn.textContent = "Masquer le description";
        div.style.display = "block";
    }
};

//DYNAMITE
const btnDyn = document.getElementById("BTN_Dynamite");
const div_Dynamite = document.getElementById("details_Dynamite");

function togg2(){
    if(getComputedStyle(div_Dynamite).display != "none"){
        btnDyn.textContent = "Description complète";
        div_Dynamite.style.display = "none";
    } else {
        btnDyn.textContent = "Masquer le description";
        div_Dynamite.style.display = "block";
    }
};

//CUPID
const btnCupid = document.getElementById("BTN_Cupid");
const div_Cupid = document.getElementById("details_cupid");

function togg3(){
    if(getComputedStyle(div_Cupid).display != "none"){
      btnCupid.textContent = "Description complète";
      div_Cupid.style.display = "none";
    } else {
      btnCupid.textContent = "Masquer le description";
      div_Cupid.style.display = "block";
    }
};

//KILL THIS LOVE
const btnKTL = document.getElementById("BTN_Kill_this_love");
const div_KTL = document.getElementById("details_Kill_this_love");

function togg4(){
    if(getComputedStyle(div_KTL).display != "none"){
      btnKTL.textContent = "Description complète";
      div_KTL.style.display = "none";
    } else {
      btnKTL.textContent = "Masquer le description";
      div_KTL.style.display = "block";
    }
};

//MONEY
const btnMoney = document.getElementById("BTN_Money");
const div_Money = document.getElementById("details_money");

function togg5(){
    if(getComputedStyle(div_Money).display != "none"){
      btnMoney.textContent = "Description complète";
      div_Money.style.display = "none";
    } else {
      btnMoney.textContent = "Masquer le description";
      div_Money.style.display = "block";
    }
};

btn.onclick = togg;
btnDyn.onclick = togg2;
btnCupid.onclick = togg3;
btnKTL.onclick = togg4;
btnMoney.onclick = togg5;






const button = document.querySelector('#btn');
const canvas = document.querySelector('#confetti');


let happyBirthday = document.querySelectorAll("#hb");

document.addEventListener("scroll", function(){
  happyBirthday.forEach((text) =>{
        if(isInView(text)){
          jsConfetti.addConfetti({}).then(() => jsConfetti.addConfetti())
        happyBirthday = "stri"
        }
    });
});

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
})











// const toggleDetails = () =>{
//     if(div.style.display = "none"){
//         btn.textContent = "Description complète";
//         div.style.display = "block";
//     } else{
//         btn.textContent = "Masquer le description";
//         div.style.display = "none";
//     }
// }

// btn.addEventListener("click", toggleDetails);


// btn.addEventListener("click", () => {
//     if(getComputedStyle(div).display != "none"){
//       div.style.display = "none";
//     } else {
//       div.style.display = "block";
//     }
// })


// document.querySelector('video').autoplay = true;

// document.querySelector('video').play();

// or also

// document.querySelector('video').pause();





