/*Html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.*/

function getAttributes(){
    console.log("button clicked");
    const href = document.getElementById("w3r").href;
    const hreflang = document.getElementById("w3r").hreflang;
    const rel = document.getElementById("w3r").rel;
    const target = document.getElementById("w3r").target;
    const type = document.getElementById("w3r").type;
    const result = "Link's href: "+href+"\nHreflang: "+hreflang+"\nRel: "+rel+"\nTarget: "+target+"\nType: "+type;
    console.log(result);
    gainedValues.textContent = result;
}