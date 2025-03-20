var tablinks=document.getElementsByClassName("tab-link");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

const sidemenu= document.getElementById("sidemenu");
const logo=document.getElementsByClassName("fa-bars")

function openmenu(){
    sidemenu.style.right="0";
    logo.style.display="none";
}
function closemenu(){
    sidemenu.style.right="-200px";
}