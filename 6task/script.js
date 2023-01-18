/* Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell. */

function changeContent(){
    var rownum = window.prompt("Row number");
    var colnum = window.prompt("Column number");
    var z = window.prompt ("Cell content");
    document.getElementById('myTable').rows[rownum].cells[colnum].innerHTML = z;
}