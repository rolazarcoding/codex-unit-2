// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
const divTag = document.getElementById("content");

// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value
console.log(divTag.innerHTML);
divTag.innerHTML = "<h1>Hello world!</h1>";
