/* Write a JavaScript function to add rows to a table. */

function insert_Row(){
    console.log("button clicked");
    const table = document.getElementById("sampleTable");
    //inserts new row
    const row = table.insertRow ();
    //inserts cells in said row
    const cell1 = row.insertCell (0);
    const cell2 = row.insertCell (1);
    cell1.textContent="Cell1"
    cell2.textContent="Cell2"
}