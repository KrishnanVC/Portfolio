// for link and scrolling

let anchorList = document.querySelectorAll(".nav-bar a, .intro-projects a"); 
          
anchorList.forEach(link => { 
    link.onclick = function (e) { 

        e.preventDefault(); 

        let destination = document.querySelector(this.hash); 
    
        destination.scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    } 
});

let skills = document.querySelectorAll('.skill-js');
let skillText = document.querySelectorAll('.myself > .skills > .skill-text > p');
let i = 0;
let count = 0;

setInterval(() => {
    
    if(count == 1){
        skills[i].style.color = "black";
        skills[i].classList.remove('scaling');
        skillText[i].classList.remove('skill-text-visible');
        i = (i+1) % 4;
    }
    else{
        skills[i].style.color = skills[i].dataset.color;
        skills[i].classList.add('scaling');
        skillText[i].classList.add('skill-text-visible');
    }
    count = (count + 1) % 2;
},2000);