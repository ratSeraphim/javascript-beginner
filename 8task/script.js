/* Write a JavaScript program to remove items from a dropdown list. */

function removecolor(){
    const select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);

}