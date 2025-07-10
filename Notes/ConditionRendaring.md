## ⚙️ React Fundamentals: Conditional Rendering

---

### ✅ What is Conditional Rendering?

> In **React**, **conditional rendering** means **dynamically displaying different components or content** based on certain conditions — just like `if`/`else` statements in JavaScript.

📌 It allows the UI to adapt based on:

* User actions
* State values
* Props
* Auth status, etc.

---

## 🧠 Analogy:

> Conditional rendering in React is like:
> "If you're hungry, show food menu. If not, show 'Come back later!'"

---

## 🔧 Common Techniques of Conditional Rendering

### 1. **Using `if` or `else` inside the function**

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

---

### 2. **Using Ternary Operator**

```jsx
function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome User</p> : <p>Please Log In</p>}
    </div>
  );
}
```

---

### 3. **Using `&&` (AND operator)**

```jsx
function Message({ unreadMessages }) {
  return (
    <div>
      <h1>Inbox</h1>
      {unreadMessages.length > 0 && <p>You have {unreadMessages.length} unread messages.</p>}
    </div>
  );
}
```

---

### 4. **Using `switch` statement (Advanced Use Case)**

```jsx
function Status({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      return <p>Something went wrong!</p>;
    case 'success':
      return <p>Data loaded successfully!</p>;
    default:
      return <p>Unknown status.</p>;
  }
}
```

---

## 📦 Real-World Use Cases of Conditional Rendering

| Use Case                      | Rendered Based on    |
| ----------------------------- | -------------------- |
| Show login/logout button      | `isLoggedIn` state   |
| Display loading spinner       | `loading` state      |
| Show “No items” if empty list | `array.length === 0` |
| Toggle form fields            | Dropdown selection   |
| Hide button after click       | `clicked` flag       |
| Show error/success message    | API response status  |

---

## 🧩 Project Example: Login Greeting

```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, Kiran!</h2>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
```

---

## 🎯 Real-Life Analogy

> Like a **smart home system**:
>
> * If door opens, turn on lights.
> * If motion is detected, send alert.
> * Else, keep idle.

---

## 📑 Interview-Level Comparison Table

| Technique | When to Use                                    | Pros                  | Cons                              |
| --------- | ---------------------------------------------- | --------------------- | --------------------------------- |
| `if/else` | For complex logic before return                | Clean, readable       | Cannot use inside JSX             |
| Ternary   | For simple inline conditional rendering        | Compact, JSX-friendly | Less readable if nested           |
| `&&`      | When you only need to show something if `true` | Short and clean       | Doesn't handle `false` conditions |
| `switch`  | Multiple rendering cases (e.g. loading states) | Organized logic       | Slightly verbose                  |

---

## 🧠 Interview Questions with Sample Answers

---

### ❓ 1. What is conditional rendering in React?

**Answer:**
Conditional rendering is the technique used to display different UI based on certain conditions (like state or props). React uses JavaScript logic (`if`, `? :`, `&&`, etc.) inside components to render dynamic content.

---

### ❓ 2. What's the difference between using `if` vs `? :` in JSX?

**Answer:**
`if/else` is used **outside JSX** (before return).
Ternary `? :` can be used **inside JSX** for inline rendering.
Use `if` for complex logic, `? :` for short conditions.

---

### ❓ 3. How do you render nothing in React conditionally?

**Answer:**

```jsx
{show && <Component />}
```

Or return `null` from the component:

```jsx
if (!visible) return null;
```

---

### ❓ 4. What happens if you return `null` from a component?

**Answer:**
React simply **renders nothing**. This is useful for hiding or conditionally skipping UI.

---

### ❓ 5. How would you conditionally apply styles or classes?

**Answer:**

```jsx
const isActive = true;
<div className={isActive ? 'active' : 'inactive'}></div>
```

---

## ✅ Summary: When to Use What

| You Want To...                                | Use This                          |
| --------------------------------------------- | --------------------------------- |
| Show A or B                                   | Ternary `condition ? A : B`       |
| Show A only if true                           | `condition && A`                  |
| Skip rendering                                | Return `null`                     |
| Render multiple views (loading/success/error) | `switch-case` or nested ternaries |
| Complex logic                                 | `if/else` before `return`         |

---
