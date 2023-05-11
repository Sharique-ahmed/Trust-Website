const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu"); 
const formbox = document.querySelector(".formbox");


hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    formbox.classList.toggle("active");
   
}
)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    formbox.classList.remove("active");
}))