// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");

form.onsubmit = handleSubmit;
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    a: form.elements.a.value,
    b: form.elements.b.value,
    c: form.elements.c.value,
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: data,
  });
  const pTag = document.getElementById("result");
  pTag.innerText =
    "Provide an options object. The method property should be POST. The body property contains the data.";
}
