
let main = document.getElementsByTagName("main")[0];

let cong =document.getElementsByClassName("cong1")[0];

let arr = ["Welcome", "to", "learn", "Cyber" , "Safety", "Games","<br>","Designed", " By", " Our","Team","<br>","This ","Cyber","games","Messages","You","<br><br>","Password Security","<br>","Fake Ads","<br>","Minswepper<br><br>","Be","Safe","At","Every","Click"]
let len = arr.length;
let time = len * 600;
let body =document.getElementsByTagName("body")[0];
let h2 = document.getElementsByClassName("loading")[0];
let div = document.getElementsByClassName("onemore")[0];
let p = document.getElementsByClassName("targeted")[0];
window.addEventListener("load", function () {
    body.style.overflow="hidden"
    let i = 0;  
    function jacob() {
        let h2content = h2.textContent;
        h2content += ".";
        h2.innerHTML = h2content
    }
    let out = setInterval(() => {
        i = i % len
        let pcontent = p.textContent;
        p.innerHTML += arr[i++] + " "
    }, 600)
    setTimeout(() => {
        clearInterval(out);
    }, time + 400);
    let int = setInterval(jacob, 400);
    setTimeout(() => {
        clearInterval(int)
    }, time + 6000);

    setInterval(() => {
        h2.textContent = "loading"
    }, 1400)
    setTimeout(() => {
        div.style.display = "none"
        // here
        main.style.display="block";
        body.style.overflow="auto"
        start.play();
    }, time + 1000);

    div.style.backgroundColor = "#111"

})
window.addEventListener("load", function() {
    window.scrollTo(0, 0);
});
window.addEventListener("beforeunload",()=>{
    window.scrollTo(0,0)
})















  
let pass = document.getElementsByClassName("child")[0];
let apk = document.getElementsByClassName("child")[1];
let unknown= document.getElementsByClassName("child")[2];
pass.addEventListener("click",()=>{
  window.location.href="pasword.html";
})
apk.addEventListener("click",()=>{
  window.location.href="unkonw.html"
})
unknown.addEventListener("click",()=>{
  window.location.href="apk.html"
})

gsap.from("#c1",{
  x:-200,
  opacity :0,
  duration:4,
  delay :1,
  ease :"power.out",
  scrollTrigger:{
     trigger : "#c1",
          scroller : "body",
          // markers : true,
          start : "top 80%",
          end : "top 40%",
          scrub : 8,
          // pin : true,
  }
})
gsap.from("#c2",{
  x:200,
  opacity :0,
  duration :4,
  scrollTrigger:{
    trigger: "#c2",
    scroller:"body",
    // markers :true,
    start :"top 80%",
    end : "top 40%",
    scrub :8,
    // pin :true,
  }
})
gsap.from("#c3",{
  x:-200,
  opacity:0,
  duration :6,
  scrollTrigger :{
    trigger:"#c3",
    scroller :"body",
    // markers :true,
    start  :"top 80%",
    end : "top 40%",
    scrub :4,
    
  }
})
gsap.from(".second",{
  x:-200,
  opacity:0,
  duration :4,
  scrollTrigger :{
    trigger:".second",
    scroller :"body",
    // markers :true,
    start  :"top 80%",
    end : "top 40%",
    scrub :4,

  }
})
gsap.from(".third",{
  x:200,
  opacity:0,
  duration :4,
  scrollTrigger :{
    trigger:".third",
    scroller :"body",
    // markers :true,
    start  :"top 80%",
    end : "top 40%",
    scrub :4,

  }
})
gsap.from(".fourth",{
  x: -200,
  opacity:0,
  duration :4,
  scrollTrigger :{
    trigger:".fourth",
    scroller :"body",
    // markers :true,
    start  :"top 80%",
    end : "top 40%",
    scrub :4,

  }
})
gsap.from(".firs",{
  opacity :0,
  duration :4,
  y : 400,
  delay :1,
})