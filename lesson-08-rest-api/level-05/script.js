// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const userdata = await response.json();
  const userId = userdata.userId;
  const title = userdata.title;
  const isCompleted = userdata.completed;
  const pUsername = document.getElementById("username");
  const pEmail = document.getElementById("email");
  const pId = document.getElementById("id");
  pTag1.innerText = "User ID: " + userId;
  pTag2.innerText = "Title: " + title;
  pTag3.innerText = "Is Completed: " + isCompleted;
  // TODO: implement fetch and set the three elements' innerText
}
