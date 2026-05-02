// Level 05 starter script
// TODO: Fetch GET https://postman-echo.com/get, await response.json(), and read response.url and selected headers.
const form = document.getElementById("sample-form");

form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const userdata = await response.json();
  const userId = userdata.userId;
  const title = userdata.title;
  const isCompleted = userdata.completed;
  const pTag1 = document.getElementById("url");
  const pTag2 = document.getElementById("host");
  const pTag3 = document.getElementById("encoding");
  pTag1.innerText = "User ID: " + userId;
  pTag2.innerText = "Title: " + title;
  pTag3.innerText = "Is Completed: " + isCompleted;
  // TODO: implement fetch and set the three elements' innerText
}
