/* Write a JavaScript program to remove items from a dropdown list. */

function removeColor(){
    const select = document.getElementById('colorSelect');
    console.log("Removed value "+document.getElementById('colorSelect').options[select.selectedIndex].text);
    select.remove(select.selectedIndex);
    
}