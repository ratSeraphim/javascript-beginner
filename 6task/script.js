/* Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell. */

function changeContent(){
    const row = document.forms["selectors"]["row"].value;
    const column = document.forms["selectors"]["col"].value;
    const content = document.forms["selectors"]["content"].value;
    document.getElementById('myTable').rows[row].cells[column].innerHTML = content;
}