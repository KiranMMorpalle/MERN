## 🎯 React Fundamentals: Event Handling
---

### ✅ What is Event Handling in React?

> **Event handling in React** refers to capturing **user interactions** (like clicks, typing, hovering) and responding with custom logic — like updating state, showing alerts, making API calls, etc.

React wraps native events in a **cross-browser wrapper called SyntheticEvent**, making event handling consistent across browsers.

---

## 🔧 Basic Event Handling Syntax

### 💡 Functional Component

```jsx
function ClickButton() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

### 💡 Class Component

```jsx
class ClickButton extends React.Component {
  handleClick() {
    alert("Button was clicked!");
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

📌 But you need to bind `this` manually OR use arrow function:

```jsx
<button onClick={() => this.handleClick()}>Click Me</button>
```

---

## 🧠 Key Differences from HTML

| Concept       | HTML                        | React                     |
| ------------- | --------------------------- | ------------------------- |
| Event name    | `onclick`                   | `onClick` (camelCase)     |
| Handler value | String                      | Function                  |
| Example       | `<button onclick="doIt()">` | `<button onClick={doIt}>` |

---

## 🔀 List of Common React Events

| Event                       | Description               |
| --------------------------- | ------------------------- |
| `onClick`                   | Click event               |
| `onChange`                  | Input field value changes |
| `onSubmit`                  | Form submission           |
| `onMouseOver`, `onMouseOut` | Hover effects             |
| `onKeyDown`, `onKeyUp`      | Keyboard events           |
| `onFocus`, `onBlur`         | Input focus/blur events   |

---

## 🔧 Event Handler with `useState`

```jsx
function InputExample() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <input type="text" value={name} onChange={handleChange} />
  );
}
```

---

## 🧪 Real-life Analogy

> Think of **event handling** as a **doorbell**:
>
> * Pressing the bell = `onClick`
> * Bell sound = callback function

React just listens to these interactions and responds accordingly.

---

## ✅ Real-World Use Cases of Event Handling

| Use Case             | Event         | What Happens           |
| -------------------- | ------------- | ---------------------- |
| Form submission      | `onSubmit`    | Validate & send data   |
| Search bar typing    | `onChange`    | Update search term     |
| Click a like button  | `onClick`     | Increment likes        |
| Hover a product card | `onMouseOver` | Show quick view        |
| Press "Enter" key    | `onKeyDown`   | Submit form or message |
| Focus on input       | `onFocus`     | Show validation help   |

---

## 🧩 Project Examples with Event Handling   (✅ Mini Projects like SearchBar, Login Form)

### 📘 1. Counter App

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### 📘 2. To-Do List (Add item)

```jsx
function TodoInput({ addItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addItem(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
```

---

## 🧠 Interview Questions on Event Handling

### ❓ 1. How is event handling different in React vs HTML?

**Answer:**
React uses **camelCase** (`onClick`) instead of lowercase (`onclick`) and passes a **function reference** instead of a string. Also, React uses **SyntheticEvent** for consistency across browsers.

---

### ❓ 2. What is SyntheticEvent in React?

**Answer:**
SyntheticEvent is React’s wrapper around the browser’s native event, providing a consistent API that works across all browsers.

---

### ❓ 3. Why should we avoid using inline arrow functions in `onClick`?

**Answer:**
Arrow functions inside JSX create a **new function on every render**, which could affect performance in large apps. Instead, define functions outside or use `useCallback`.

---

### ❓ 4. How do you pass arguments to event handlers?

**Answer:**

```jsx
<button onClick={() => handleClick(item.id)}>Delete</button>
```

OR

```jsx
<button onClick={handleClick.bind(this, item.id)}>Delete</button>
```

---

## ⚖️ Summary: Event Handling

| Concept            | Description                                      |
| ------------------ | ------------------------------------------------ |
| Handler definition | Function in component                            |
| Triggering         | Via user interaction (click, type, submit, etc.) |
| Binding `this`     | Required in class components                     |
| Controlled input   | Use `onChange` + `useState`                      |
| Form               | Use `onSubmit` + prevent default                 |

---

