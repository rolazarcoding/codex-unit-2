## Level 02 — Feedback Message

Objective
Show clear success and error feedback to the user after a login attempt.

Benefits

- Improves UX by surfacing meaningful API responses.
- Teaches DOM updates and form lifecycle (resetting).

Complete these tasks

- Add elements with ids `error` and `success` to the page.
- Send a fetch request to `https://dummyjson.com/auth/login`
- Add `headers: { "Content-Type": "application/json" }` to the fetch options.
- Select the `error` and `success` elements.
- On success, display a friendly message in `success` and call `form.reset()`.
- On failure, display the error message in the `error` element.

Hints

- Clear the opposite element when showing an error/success to avoid mixed messages.
- Use `if` statements (eg. `if (message !== undefined)`) to clear inappropriate messages.

More information

- Valid logins are here: `https://dummyjson.com/users`
- Keep messages short and actionable. For tests, ensure elements exist and are updated.

Usage tips

- Use `aria-live` regions so assistive tech announces updates.
- Use `element.textContent = '...'` and set appropriate ARIA roles.

Example

- Update an element:

```js
errorEl.innerText = "Login failed: invalid credentials";
```
