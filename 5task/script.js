/* Write a JavaScript function to add rows to a table. */

function insert_Row(){
    console.log("button clicked");
    var table = document.getElementById("sampleTable");
    //inserts new row
    var row = table.insertRow ();
    //inserts cells in said row
    var cell1 = row.insertCell (0);
    var cell2 = row.insertCell (1);
    cell1.textContent="Cell1"
    cell2.textContent="Cell2"
}