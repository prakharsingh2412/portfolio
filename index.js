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

const scriptURL = 'https://script.google.com/macros/s/AKfycbw119T_N78LBa8w8TbqWWAYsZDytzgCJp2dFTf2FaV0QWeffkVtzM91ZrlFHyk9l60/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = ""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  function handleSubmit(event) {
    event.preventDefault();
    const button = document.getElementById('submitButton');
    button.disabled = true;
    button.textContent = 'Submitting...';
    
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Submit';
    }, 3550);
  }