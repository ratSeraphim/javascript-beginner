/* Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell. */

function createTable(){
    const rownum = document.forms["selectors"]["row"].value;
    const colnum = document.forms["selectors"]["col"].value;

    //fills the arrays with numbers from 0 to 1 below length//
    /* const rows = Array.from({length: rownum}, (elm, index)=> {
        return index;
    });
    const columns = Array.from({length: colnum}, (elm, index)=> {
        return index;
    });

    rows.forEach((rows ) => {
        let r = document.getElementById('myTable').insertRow(rows);
        columns.forEach((columns) => {
            let c = r.insertCell(columns);
            c.innerHTML = "row"+rows+ " col"+columns;
        });
    }); */
    
    var Table = document.getElementById("myTable");
    Table.innerHTML = "";

    for(let i = 0; i < rownum; i++ ){
        let r = document.getElementById('myTable').insertRow(i);
        for(let j = 0; j < colnum; j++){
            let c = r.insertCell(j);
            c.innerHTML = "r"+i +" c"+j;
        } 

    } 
}