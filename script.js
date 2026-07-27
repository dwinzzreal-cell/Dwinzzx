/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        loader.style.transition = "0.8s";

        setTimeout(() => {
            loader.remove();
        }, 800);

    }, 1500);
});

/* =========================
   TYPING EFFECT
========================= */

const typing = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "UI / UX Designer",
    "Full Stack Developer",
    "Web Designer",
    "Creative Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){
        typing.textContent = current.substring(0,charIndex++);
    }else{
        typing.textContent = current.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex === current.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === -1){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect,speed);

}

typeEffect();

/* =========================
   NAVBAR SCROLL
========================= */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        nav.style.background="rgba(5,8,22,.85)";
        nav.style.backdropFilter="blur(18px)";
        nav.style.boxShadow="0 15px 40px rgba(0,0,0,.4)";

    }else{

        nav.style.background="rgba(255,255,255,.05)";
        nav.style.boxShadow="none";

    }

});

/* =========================
   SCROLL REVEAL
========================= */

const reveal = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

reveal.forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(80px)";
sec.style.transition="1s";

observer.observe(sec);

});

/* =========================
   FLOATING PARTICLES
========================= */

const particles=document.getElementById("particles");

for(let i=0;i<80;i++){

const dot=document.createElement("span");

dot.style.position="absolute";
dot.style.width=Math.random()*4+2+"px";
dot.style.height=dot.style.width;
dot.style.borderRadius="50%";
dot.style.background="rgba(0,255,255,.8)";
dot.style.left=Math.random()*100+"%";
dot.style.top=Math.random()*100+"%";
dot.style.opacity=Math.random();

const duration=Math.random()*20+10;

dot.animate([
{
transform:"translateY(0px)"
},
{
transform:"translateY(-120px)"
},
{
transform:"translateY(0px)"
}
],{

duration:duration*1000,
iterations:Infinity

});

particles.appendChild(dot);

}

/* =========================
   HERO IMAGE PARALLAX
========================= */

const profile=document.querySelector(".profile-card");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

profile.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

/* =========================
   BUTTON RIPPLE
========================= */

document.querySelectorAll(".hero-btn a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".25s";
btn.style.transform="scale(1.06)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/* =========================
   FPS COUNTER (Debug)
========================= */

let last = performance.now();
let fps = 0;

function updateFPS(now){

fps = Math.round(1000/(now-last));

last = now;

requestAnimationFrame(updateFPS);

}

requestAnimationFrame(updateFPS);

console.log("Portfolio Loaded Successfully");

/* ===========================
3D PROJECT CARD
=========================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ===========================
CONTACT FORM
=========================== */

document.querySelector(".contact-form").addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thanks! Your message has been sent.");

});

/* ===========================
BACK TO TOP
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
CUSTOM CURSOR
=========================== */

const cursor=document.getElementById("cursor");
const blur=document.getElementById("cursorBlur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX+"px";
blur.style.top=e.clientY+"px";

});

/* ===========================
CURSOR HOVER
=========================== */

document.querySelectorAll("a,button").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(2)";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

});

});

/* ===========================
METEOR
=========================== */

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.top=Math.random()*300+"px";

meteor.style.left=window.innerWidth+100+"px";

document.body.appendChild(meteor);

setTimeout(()=>{

meteor.remove();

},1600);

}

setInterval(createMeteor,3000);

/* ===========================
PARALLAX
=========================== */

document.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".glass-card,.project-card,.skills-card").forEach(card=>{

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*12;

card.style.transform=
`rotateX(${-y}deg)
rotateY(${x}deg)`;

});

});

/* ===========================
SCROLL BAR
=========================== */

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});

/* ===========================
THEME SWITCHER
=========================== */

document.querySelectorAll("#themeSwitcher button").forEach(btn=>{

btn.onclick=()=>{

const color=btn.dataset.theme;

if(color==="cyan"){

document.documentElement.style.setProperty("--main","#00d9ff");

}

if(color==="purple"){

document.documentElement.style.setProperty("--main","#8a2be2");

}

if(color==="green"){

document.documentElement.style.setProperty("--main","#00ff88");

}

};

});

/* ===========================
WELCOME TOAST
=========================== */

const toast=document.getElementById("toast");

setTimeout(()=>{

toast.classList.add("show");

},1200);

setTimeout(()=>{

toast.classList.remove("show");

},5000);

/* ===========================
COUNTER
=========================== */

document.querySelectorAll(".stat h2").forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

count+=Math.ceil(target/80);

if(count>target) count=target;

counter.innerText=count+"+";

if(count<target){

requestAnimationFrame(update);

}

};

update();

});

/* ===========================
PAGE TITLE
=========================== */

const titles=[

"Dwinzz Portfolio",

"Frontend Developer",

"Creative UI Designer",

"Full Stack Developer"

];

let index=0;

setInterval(()=>{

document.title=titles[index];

index++;

if(index>=titles.length){

index=0;

}

},2500);
