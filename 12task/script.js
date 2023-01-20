/* Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over. */
function highlightText(){
    console.log("Link hovered over");
    const bolded = document.querySelectorAll('b');
    bolded.forEach(element => {
        element.style.color="gray";
        element.style.background="yellow";
    });
}

function unHighlightText(){
    console.log("Mouse left link");
    const bolded = document.querySelectorAll('b');
    bolded.forEach(element => {
        element.style.color="inherit";
        element.style.background="inherit";
    });
}