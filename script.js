console.log("Hello There");
var products = document.getElementById("products");
var UList = document.getElementsByClassName("UList");
var dropdown = document.getElementById("dropdown");
var list = document.getElementsByClassName("list");
var fade = document.getElementById("fade-in")

console.log(dropdown);
console.log(products);

products.addEventListener('mouseenter', ()=>{
    dropdown.classList.toggle("active");
    console.log(dropdown);
    
})

var signup = document.getElementsByClassName("signup");
console.log(signup[0]);
signup[0].addEventListener('click', ()=>{
    document.getElementById("nothing").classList.toggle("cover");
    document.getElementById("form").classList.toggle("action");
})

document.getElementById("submit").addEventListener("click", ()=>{
    document.getElementById("nothing").classList.toggle("cover");
    document.getElementById("form").classList.toggle("action");

}) 

// document.addEventListener("scroll", ()=>{
//     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 100 ) {
//         fade.classList.toggle("fadee");
//     }
    
// })

if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 100 ) {
    fade.classList.toggle("fadee");
}

