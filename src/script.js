

console.log("Hello");


document.getElementById("btnFetch").addEventListener("click", getPets);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
function getPets() {
    console.log("begin getPets Function")
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
    // Basic HTTP METHOD Get below
    fetch("https://ihc47lfvtf.execute-api.us-west-2.amazonaws.com/prod/pets")
        .then(data => data.json()) // interpret the response returned as JSON data
        .then(data => console.log(data)); // write out the data to the console for now
    // next step, do SOMETHING with the data, interact with the DOM
    console.log("end getPets Function")
}


console.log("GoodBye")