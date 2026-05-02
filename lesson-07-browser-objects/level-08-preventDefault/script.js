// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic

const form = document.querySelector("form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  // TODO: uncomment the next line when you want to prevent navigation
  event.preventDefault();
  console.log(
    "submit handler: preventDefault not yet called (uncomment to test)",
  );
}
