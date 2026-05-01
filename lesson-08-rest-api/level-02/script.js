// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const resultTag = document.getElementById("result");
  resultTag.innerText =
    "The fetch function takes in a URL and communicates with a server.";
}
