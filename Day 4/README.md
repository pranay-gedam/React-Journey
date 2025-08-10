# 📅 Day 4 – Ref Hook & Revisiting useEffect

## 📘 What I Learned

- **useRef Hook**:
  - Stores a **mutable value** that does **not cause re-renders** when updated.
  - Common uses:
    - Accessing **DOM elements** directly.
    - Storing values across renders without triggering re-render.
    - Holding **previous state values**.
  - Syntax:
    ```jsx
    const refName = useRef(initialValue);
    ```

- **Revisiting useEffect**:
  - Reinforced understanding of:
    - Dependency array usage.
    - Cleaning up side effects with `return () => {}`.
  - Observed how `useRef` can be used **inside `useEffect`** for storing or comparing values.


🧠 Key Takeaways
useRef is great for persisting values without causing re-renders.
It’s useful for DOM access and storing previous state.
Revisiting useEffect helped strengthen:
Dependency array understanding.
Cleanup function usage.

🔁 Next Focus
Learn about Conditional Rendering in React.
Practice Lists & Keys.


