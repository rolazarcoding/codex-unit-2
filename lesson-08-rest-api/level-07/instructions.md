# Level 07 — Fetch options

## Objective

This level practices adding fetch options to send a POST request and inspecting how request bodies are attached.

## Benefits

- **Build fetch options**: learn to set `method` and `body`.
- **Request formatting**: understand why bodies must be formatted correctly.

## Complete these tasks

- Ensure the form inputs have `name` attributes.
- In `script.js`, implement a form handler attached to `form.onsubmit` and call `event.preventDefault()`.
- Use `form.elements` to collect input values into a `data` object whose keys match input `name` attributes.
- Use `async/await` to call `fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: data })`.
- Insert a short explanation into the `#result` element describing how the data was attached to the request.

## Hints

- The data is intentionally not stringified for this exercise.
- The server expects a properly formatted body. Leaving the object un-stringified may produce an error.

## More information

- `fetch` accepts an options object where `method` and `body` are commonly set for POST requests.
- For POST request, data is attached to the `body` of the `fetch` options.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## Usage tips

- Attach `script.js` with `defer` so the DOM is available when the script runs.

## Example

```js
async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: data,
  });
}
```
