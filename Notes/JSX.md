## 🧱 React Fundamentals: JSX (JavaScript XML)

### ✅ What is JSX?

JSX is a **syntax extension** for JavaScript that lets you write HTML-like code in your JavaScript (or React) files.

Instead of using `React.createElement()` manually to build UI elements, JSX lets you write code like:

```jsx
const element = <h1>Hello, world!</h1>;
```

### ⚙️ How JSX Works

Behind the scenes, JSX is **compiled** by **Babel** into `React.createElement()` calls:

```jsx
// JSX
<h1 className="title">Hello</h1>

// Compiled version
React.createElement("h1", { className: "title" }, "Hello")
```

---

### 🧠 Why Use JSX?

| Benefit             | Description                                     |
| ------------------- | ----------------------------------------------- |
| 🔍 **Readable**     | Looks like HTML, easier to understand UI layout |
| 🛠️ **Declarative** | Describes what UI should look like              |
| ♻️ **Reusable**     | Works great with components                     |
| 🔗 **Dynamic**      | Embeds JavaScript directly with `{}`            |

---

### 🔗 Embedding Expressions in JSX

You can inject JS expressions using `{}`:

```jsx
const name = 'Kiran';
const element = <h1>Hello, {name}!</h1>;
```

You can also use expressions inside attributes:

```jsx
<img src={user.profilePicUrl} alt="Profile" />
```

---

### 🚫 Invalid in JSX

| ❌ Invalid                                 | ✅ Correct                                          |
| ----------------------------------------- | -------------------------------------------------- |
| `class`                                   | `className`                                        |
| `for`                                     | `htmlFor`                                          |
| Return multiple elements without a parent | Wrap with a single parent or use `<> </>` fragment |

---

### 🧩 JSX Must Return One Element

✅ Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

❌ Wrong:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

Or use **React Fragments**:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

---

### 🎨 JSX Can Include:

| Element                    | Example                             |
| -------------------------- | ----------------------------------- |
| **HTML Tags**              | `<div>`, `<h1>`, `<ul>`             |
| **React Components**       | `<MyComponent />`                   |
| **JavaScript Expressions** | `{1 + 2}`, `{user.name}`            |
| **Functions**              | `{formatDate(date)}`                |
| **Ternary Conditionals**   | `{isLoggedIn ? 'Logout' : 'Login'}` |

---

### ✅ JSX Best Practices

* Always close tags: `<br />`, `<img />`
* Use camelCase for props: `onClick`, `className`
* Wrap multiple lines in parentheses `()` after `return`
* Escape values via `{}` but **don’t use statements** (like `if`, `for`) — use ternary or functions.

---

### 🛠 Mini Project Idea using JSX

**📦 Project: Profile Card UI**

```jsx
function ProfileCard({ name, imageUrl, bio }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

// Usage
<ProfileCard
  name="Kiran Morpalle"
  imageUrl="https://example.com/avatar.jpg"
  bio="Frontend Developer | React Enthusiast"
/>
```

---

### 💡 Interview Tip

> ❓ What is JSX and how does it work in React?

**Answer:**
JSX is a syntax extension for JavaScript that allows us to write HTML-like code within React. It’s compiled by Babel to `React.createElement()` calls, which build the virtual DOM. JSX improves readability and integrates JavaScript expressions easily.

---
