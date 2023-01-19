/* Write a JavaScript program to get the width and height of the window (any time the window is resized). */
windowsize.textContent="Height: "+window.innerHeight+" Width: "+window.innerWidth;

window.addEventListener('resize', function(event){
    console.log("window resized");
    windowsize.textContent="Height: "+window.innerHeight+" Width: "+window.innerWidth;
  });

