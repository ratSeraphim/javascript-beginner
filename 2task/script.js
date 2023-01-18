/* Write a JavaScript function to get the values of the First and Last name of the following form. */

function getFormvalue(){
    let firstName = document.forms["form1"]["fname"].value;
    let lastName = document.forms["form1"]["lname"].value;
    /*page is instantly reloaded, so console log can only be seen if you're saving the log*/
    console.log("You have entered: "+firstName+" "+lastName);
    /* alert added for the purpose of seeing the input without having to save the log */
    alert("You have entered: "+firstName+" "+lastName);
};
