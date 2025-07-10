## 🧱 1. PROPS — Syntax, Explanation, Use Cases

### 🔍 What are Props?

**Props** (short for “properties”) are **read-only values passed from parent to child** components.
They help make components **reusable and dynamic**.

---

### ✅ Basic Props Syntax

#### Parent Component:

```jsx
<Profile name="Kiran" age={24} />
```

#### Child Component:

```jsx
function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

📌 Alternatively, use **destructuring** (cleaner):

```jsx
function Profile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

---

### 📦 Props Syntax Rules (Interview Points)

| Rule                                  | Example                       |
| ------------------------------------- | ----------------------------- |
| Passed like HTML attributes           | `<Component title="Hello" />` |
| Data passed is **read-only**          | ❌ Cannot modify `props`       |
| Use `{}` for non-string values        | `<Profile age={21} />`        |
| Accessed via `props` or destructuring | `props.title` or `{ title }`  |

---

### 🔍 Real-Life Analogy

**Props** are like:

> “Your manager gives you a document (props) — you can read it, use it, but not edit it.”

---

### 🎯 Real Interview Use Cases of Props

| Use Case                                 | Why Props?                        |
| ---------------------------------------- | --------------------------------- |
| Display different user profiles          | Pass user info as props           |
| Button with dynamic label                | `<Button label="Login" />`        |
| Render a reusable product card           | Pass image, name, price via props |
| Customize page layout (e.g., light/dark) | Theme props                       |

---

---

## 🧠 2. STATE — Syntax, Explanation, Use Cases

### 🔍 What is State?

**State** is a built-in object used to store **local data** in a component.
When the **state changes**, the component **re-renders** automatically.

---

### ✅ Functional Component State Syntax (`useState` Hook)

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // [stateVar, setter]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

---

### ✅ Class Component State Syntax

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
```

---

### 📦 State Syntax Rules (Interview Points)

| Rule               | Functional Component       | Class Component     |
| ------------------ | -------------------------- | ------------------- |
| Declare state      | `useState(initialValue)`   | `this.state = {}`   |
| Update state       | `setState(newValue)`       | `this.setState({})` |
| Triggers re-render | ✅                          | ✅                   |
| Async behavior     | `setState` is asynchronous | same                |

---

### 🔍 Real-Life Analogy

**State** is like:

> “Your personal diary. You can write, erase, and it only belongs to you.”

---

### 🎯 Real Interview Use Cases of State

| Use Case                 | Why State?                           |
| ------------------------ | ------------------------------------ |
| Toggle dark/light theme  | Store theme in state                 |
| Counter                  | Store & update click count           |
| Form input field         | Store and manage input text          |
| Show/hide modal          | Store visibility boolean in state    |
| Fetch data and update UI | Set response in state after API call |

---

## 🔁 PROPS vs STATE – Quick Comparison

| Feature                   | Props            | State                                 |
| ------------------------- | ---------------- | ------------------------------------- |
| Mutability                | ❌ Immutable      | ✅ Mutable                             |
| Data Source               | Parent           | Component itself                      |
| Update Triggers Re-render | ✅ Yes            | ✅ Yes                                 |
| Use Case                  | Customization    | Interactivity                         |
| Access                    | `props.propName` | `stateVar` (hooks) / `this.state.var` |

---

## 📑 Interview Q\&A

### ❓ Q1: Can state be updated directly like `state.count = 5`?

> ❌ No. You must use `setState()` or `useState()` setter function to update the state.

---

### ❓ Q2: Can props be changed inside the child?

> ❌ No. Props are **read-only**. To change them, update the value in the **parent component**.

---

### ❓ Q3: What happens when state changes?

> React **re-renders** the component to reflect the new state in the UI.

---

### ❓ Q4: Can we use both props and state in one component?

> ✅ Yes. You can receive **props from parent** and manage **state locally** in the same component.

---

## 🔨 Mini Projects to Practice

| Project            | Use Props              | Use State            |
| ------------------ | ---------------------- | -------------------- |
| User Profile Card  | ✅                      | ❌                    |
| To-Do App          | ✅ (task name)          | ✅ (task list, input) |
| Counter Button     | ❌                      | ✅                    |
| Product Grid       | ✅ (image, name, price) | ❌                    |
| Show/Hide Password | ❌                      | ✅ (toggle state)     |

---
