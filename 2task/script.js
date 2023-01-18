/* Write a JavaScript function to get the values of the First and Last name of the following form. */

function getFormvalue(){
    //stops page from reloading when form is submitted
    event.preventDefault();
    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;
    console.log("You have entered: "+firstName+" "+lastName);
    fullname.textContent = firstName+" "+lastName;

};
