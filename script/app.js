
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");


hamburger.addEventListener("click",(e) => {
    const parent = e.target.parentElement;
    parent.classList.toggle("active");
    if(parent.classList.contains("active")){
        e.target.src=`./images/icon-close.svg`;
        nav.style.display="block";
    }else{
        e.target.src=`./images/icon-hamburger.svg`;
        nav.style.display="none";

    }
})