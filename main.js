var click = document.querySelector("#click");
var ul = document.querySelector("ul")
var body = document.body
var a = document.querySelectorAll("a")
var circle = document.querySelector("#circle")
var nav = document.querySelector("nav")

click.onclick = () => {
    ul.classList.toggle("move")
    body.classList.toggle("move2")
    a.forEach(element => {
        element.onclick = () => {
            ul.classList.remove("move")
            body.classList.remove("move2")
        }
    });
}

circle.onclick = () => {
    window.scroll(0,0)
    ul.classList.remove("move")
    body.classList.remove("move2")
}

window.onscroll = () => {
    circle.classList.toggle("show", window.scrollY > 300)
    nav.classList.toggle("sticky", window.scrollY > 0)
}