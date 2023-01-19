/* Write a JavaScript program to calculate the volume of a sphere. 
 */
function calculate(){

    const radius = document.forms["values"]["radius"].value;
    let result;
    console.log("You have entered: "+radius);
    result = (4/3) * Math.PI * Math.pow(radius,3);
    console.log("Result: "+result);
    document.forms["values"]["volume"].value = result;

};
