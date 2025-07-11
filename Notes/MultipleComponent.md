Absolutely! ✅

You can definitely **include (render) multiple components inside one parent component** and run it. This is a very common pattern in React.

---

## How to do it

Suppose you have two components: `Header` and `Footer`.

You can include both inside a `Page` component like this:

```jsx
function Header() {
  return <h1>This is the Header</h1>;
}

function Footer() {
  return <footer>This is the Footer</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Page;
```

---

## What happens?

* When you render `<Page />`, it will show both the header and footer because they are included inside it.
* React components can return **any number of child components inside a single parent element**.

---

## Example usage in `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
```

---

## Important notes

* **React components must return a single parent element** (like a `<div>`, `<main>`, or React Fragment `<>...</>`).
* Inside that parent, you can include as many child components as you want.

---

### Using React Fragment if you don't want extra div:

```jsx
function Page() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
```

---

Would you like me to create a mini project example with multiple components inside a parent?
