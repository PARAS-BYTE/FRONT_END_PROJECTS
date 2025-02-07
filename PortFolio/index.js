function mapRange(in_min, in_max, out_min, out_max, value) { return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; }

let some = document.getElementsByClassName('u')[0];
let x = some.getBoundingClientRect();
window.addEventListener("mousemove", function (details) {
    some.style.top = `${details.clientY - x.top}px`
    some.style.left = `${details.clientX - x.left}px`
})
let img = document.createElement('img');
let one = document.getElementById('sso');
one.addEventListener("mousemove", function (details) {
    img.src = "image.png";
    img.classList.add("image1")
    one.appendChild(img);
    img.style.left = `${details.clientX - 40}px`
    let transformer = mapRange(0, 800, 0, 70, details.clientX);
    img.style.transform = `rotate(${transformer}deg)`


})
one.addEventListener("mouseleave", function () {
    img.remove();
})
let two = document.getElementById('ffc');
let img1 = document.createElement('img');
two.addEventListener("mousemove", function (details) {
    img1.src = "img'.png";
    img1.classList.add("image12");
    two.appendChild(img1);
    img1.style.left = `${details.clientX - 40}px`
    let transformer = mapRange(0, 800, 0, 70, details.clientX);
    img1.style.transform = `rotate(${transformer}deg)`
})
two.addEventListener("mouseleave", function () {
    img1.remove();
})
let something = document.querySelectorAll("#you");
something.forEach(elem => {
    var helo = new Typed(elem, {
        strings: ["Adress", "Education", "Skills", "Technical Skills"],
        typeSpeed: 103,
        backSpeed: 109,
        loop: true

    })

})

let education = document.querySelectorAll(".education");
education.forEach(elem => {
    elem.addEventListener("mousemove", function () {
        some.style.transform = "scale(5)";
    })
    elem.addEventListener("mouseleave", function () {
        some.style.transform = "scale(1)";
    })
})
let now = document.getElementById("now");
let here = document.getElementById("this");

now.addEventListener("mousemove", function () {
    here.style.transform = "translate(0,-35px)";
    some.style.backgroundColor = "grey";

    some.style.transform = "scale(6)"
})
now.addEventListener("mouseleave", function () {
    here.style.transform = "translate(0,0px)";
    some.style.backgroundColor = "white";
    some.style.transform = "scale(1)"
})
let noww = document.getElementById("noww");
let heres = document.getElementById("thiss");

noww.addEventListener("mousemove", function () {
    heres.style.transform = "translate(0,-35px)";
    some.style.backgroundColor = "grey";

    some.style.transform = "scale(6)"
})
noww.addEventListener("mouseleave", function () {
    heres.style.transform = "translate(0,0px)";
    some.style.backgroundColor = "white";
    some.style.transform = "scale(1)"
})

