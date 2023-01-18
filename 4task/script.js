/*Html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.*/

function getAttributes(){
    console.log("button clicked");
    let aHref = document.getElementById("w3r").href;
    let aHreflang = document.getElementById("w3r").hreflang;
    let aRel = document.getElementById("w3r").rel;
    let aTarget = document.getElementById("w3r").target;
    let aType = document.getElementById("w3r").type;
    let result = "Link's href: "+aHref+"\nHreflang: "+aHreflang+"\nRel: "+aRel+"\nTarget: "+aTarget+"\nType: "+aType;
    console.log(result);
    gainedValues.textContent = result;
}