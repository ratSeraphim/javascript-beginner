/* Write a JavaScript program to count and display the items of a dropdown list, in an alert window. */

function getOptions(){

    const select = document.getElementById("mySelect").options;
    let drop = select.length + " options: ";

    const choices = (document.getElementById("mySelect").textContent);
    alert(drop + choices);
}