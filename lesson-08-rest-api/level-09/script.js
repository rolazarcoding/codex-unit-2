// Level 09 starter script
// TODO: Save a target element and set its innerText to briefly compare GET and POST.
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
    body: JSON.stringify(data),
  });
  const user = await response.json();
  const id = user.id;
  const pTag = document.getElementById("result");
  pTag.innerText = "User ID: " + id;
}
