document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
     

    // trim white space 
    let name = document.querySelector('#name').value.trim();
     console.log(name); 

    let email = document.querySelector('#email').value.trim();
     console.log(email); 

    let message = document.querySelector('#message').value.trim();
     console.log(message); 


    const date = new Date("2022-09-12");
    const todayDay = date.getDay(); 
    // console.log(todayDay);

    if (todayDay=="0" || todayDay=="6"|| todayDay=="5"){
        alert("Unfortunately, you cannot send the contact form on Friday, Saturday and Sunday.");
        return true;
    }  else if (name === ''|| email === ''|| message === '') {
        alert("There cannot be blank spaces")
}
    else {
        alert("Your form was successfully sent.");
        return false;  
    } 
}); 


// longer version of the IF - only done for the days
/* if (todayDay =="0" ){
    alert("Unfortunately, you cannot send the contact form on Sunday.");
    return true;
} else if (todayDay == "6") {
    alert("Unfortunately, you cannot send the contact form on Saturday.");
    return true;
} else if (todayDay =="5") {
    alert("Unfortunately, you cannot send the contact form on Friday.");
    return true;
} else {
    alert("Your form was successfully sent."); // idk if I can put it here probably will have to create anoter for it
    return false;  
} */ 



