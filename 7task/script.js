/* Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell. */

function createTable(){
    var rownum = window.prompt("Row number");
    var colnum = window.prompt("Column number");
    
    for(var i = 0; i < rownum; i++ ){
        var r = document.getElementById('myTable').insertRow(i);
        for(var j = 0; j < colnum; j++){
            var c = r.insertCell(j);
            c.innerHTML = "r"+i +" c"+j;
        } 

    }
}