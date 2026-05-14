// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await response.json();
  const userId = result.userId;
  const title = result.title;
  const isCompleted = result.completed;
  const pTag1 = document.getElementById("userid");
  const pTag2 = document.getElementById("title");
  const pTag3 = document.getElementById("iscompleted");
  pTag1.innerText = "User ID: " + userId;
  pTag2.innerText = "Title: " + title;
  pTag3.innerText = "Is Completed: " + isCompleted;
  // TODO: implement fetch and set the three elements' innerText
}
