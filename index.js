
/*const mySkillButton = document.getElementById("aboutme-skills")
const myExperienceButton = document.getElementById("aboutme-experience")
const myEducationButton = document.getElementById("aboutme-education")

const skillContent = document.getElementById("skills")
const experienceContent = document.getElementById("experience")
const educationContent = document.getElementById("education")

mySkillButton.addEventListener("click", event =>{
    skillContent.style.display="block"
    experienceContent.style.display="none";
    educationContent.style.display="none";
})


myExperienceButton.addEventListener("click", event =>{
   
    skillContent.style.display="none";
    experienceContent.style.display="block";
    educationContent.style.display="none";
})

myEducationButton.addEventListener("click", event =>{
   
    skillContent .style.display="none";
    experienceContent.style.display="none";
    educationContent.style.display="block";
}) */



function threenum(a,b,c){
    let maxVal=0;

    if(a>b){
        maxVal=a;
        console.log(`max value is ${a}`);
    }
    else{
        maxVal=b;
         console.log(`max value is ${b}`);
    }

    if(c>maxVal){
        maxVal=c;
        console.log(`max value is ${c}`);
         
    }
    return maxVal;
   
}



console.log(threenum(200,18,10))