## 🧱 React Fundamentals: `Props` vs `State`

### 🔹 What is **`Props`**?

> **Props (short for “Properties”)** are **read-only inputs** to a React component.
> They are **passed from parent to child** and help make components **reusable and dynamic**.

### ✅ Key Points:

* Passed **from parent to child**
* **Immutable** (cannot be changed by the child)
* Help build **reusable UI components**
* Received as a parameter: `props` or `{ propName }`

---

### 🔧 Props Example:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Greeting name="Kiran" />
```

🟢 Output: `Hello, Kiran`

---

### 🔹 What is **`State`**?

> **State** is a **local data storage** specific to the component.
> It allows the component to **remember information** and **re-render** when the data changes.

### ✅ Key Points:

* Managed **within** the component
* **Mutable** — can change using `setState()` or `useState()`
* Triggers **re-render** on change
* Used for UI interactivity (input, counter, toggles, etc.)

---

### 🔧 State Example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```

---

## ⚔️ Props vs State: 🔍 Comparison Table

| Feature            | `Props`                            | `State`                                |
| ------------------ | ---------------------------------- | -------------------------------------- |
| Data Ownership     | Parent component                   | Local to component                     |
| Mutability         | ❌ Immutable                        | ✅ Mutable via `setState` or `useState` |
| Used For           | Passing data to child              | Managing internal data                 |
| Trigger re-render? | ✅ Yes                              | ✅ Yes                                  |
| Accessed via       | `props.propName` or `{ propName }` | `[stateVar, setStateVar]`              |
| Direction          | Top-down (parent → child)          | Encapsulated within the component      |

---

## 🧠 Real-Life Analogy

| Concept | Example                                                                    |
| ------- | -------------------------------------------------------------------------- |
| Props   | A **gift** from your parent — you **can use it**, but **can’t change it**. |
| State   | Your **personal diary** — you can **write and update** it anytime.         |

---

## 🎯 Use Case Scenarios

| Use Case                                | Use `Props` | Use `State` |
| --------------------------------------- | ----------- | ----------- |
| Show user name passed from parent       | ✅           | ❌           |
| Counter that increases on click         | ❌           | ✅           |
| Form input handling                     | ❌           | ✅           |
| Toggle dark/light mode from a button    | ❌           | ✅           |
| Reuse a component with different titles | ✅           | ❌           |

---

## 🧪 Real-World Example with Both

```jsx
function Profile({ username }) {  // props
  const [likes, setLikes] = useState(0); // state

  return (
    <div>
      <h2>{username}'s Profile</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

// Usage
<Profile username="Kiran" />
```

---

## 💬 Top Interview Questions (with Answers)

### ❓ 1. What is the difference between `props` and `state`?

> **Props** are read-only inputs passed from parent to child.
> **State** is mutable and local to the component, used to manage interactivity.

---

### ❓ 2. Can a child component modify props?

> ❌ No. Props are **immutable** in the child.
> If modification is needed, the parent must update it and re-pass.

---

### ❓ 3. Does changing state cause re-render?

> ✅ Yes. React will **re-render** the component (and children) when state changes.

---

### ❓ 4. Can we use both props and state in the same component?

> ✅ Absolutely. A component can **receive props** and **manage its own state** simultaneously.

---

### ❓ 5. How do you lift state up?

> State can be "lifted" to a common ancestor component, then passed down via **props** to synchronize two or more child components.

---

## 🚀 Mini Projects for Practice

| Project                    | Uses                                |
| -------------------------- | ----------------------------------- |
| Profile Card               | Props only                          |
| Counter App                | State only                          |
| Like Button with User Info | Props + State                       |
| Light/Dark Mode Toggle     | State                               |
| Dynamic Navbar             | Props (links) + State (active item) |

---
