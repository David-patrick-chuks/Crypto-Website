const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email_input = document.getElementById('email_input');
const eror_message = document.getElementById('eror_message');

 

const signup_FormBTN =document.getElementById('signup_FormBTN');
signup_FormBTN.addEventListener('click', (summit) => {
    summit.preventDefault();
    // console.log(summit);

    //email confirmation
    if(re.test(email_input.value)){
        console.log("core email");
        // email_input.value = eror_message.textContent="Email confirmation";
        return true;
    }else{
        eror_message.style.display = "block";
        eror_message.textContent = "enter valid email address"
    
    }

});