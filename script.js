const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const coupen = document.getElementsByClassName("coupen-cards")

leftArrow.addEventListener("click",()=>{
    
    for(let i = 0; i < coupen.length; i++){
        coupen[i].style.transform = "translateX(0px)"
   
    }
})

rightArrow.addEventListener("click",()=>{
    
    for(let i = 0; i < coupen.length; i++){
        coupen[i].style.transform = "translateX(-180px)"
        
    }
})


const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");



let val = 0
hamburger.addEventListener("click",()=>{

    if(val== 0){

        
    
    dropdown.style.display = "block";
    hamburger.removeAttribute;
    hamburger.setAttribute("class","ri-close-fill");
    val = 1;


    }
    else{
    dropdown.style.display = "none";
    hamburger.removeAttribute;
    hamburger.setAttribute("class","ri-menu-line");
    val = 0;

    }
    



})