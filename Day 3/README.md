# 📅 Day 3 – State, Hooks, and useEffect

## 📘 What I Learned

- **State in React**:
  - State stores **dynamic data** in a component.
  - Unlike props, state is **managed inside the component**.
  - Updating state triggers a **re-render** of the component.

- **Hooks**:
  - Introduced in React 16.8 to allow state and other features in functional components.
  - Common hooks:
    - `useState` → For managing state.
    - `useEffect` → For side effects (e.g., fetching data, timers).

- **useEffect**:
  - Runs after the component renders.
  - Can be used for:
    - Fetching API data
    - Setting up event listeners
    - Updating the document title
  - Dependency array `[]` controls when the effect runs:
    - Empty `[]` → Runs only on mount.
    - With variables → Runs when those variables change.

🧠 Key Takeaways
State allows components to be interactive and dynamic.
Hooks bring state and lifecycle features to functional components.
useEffect is crucial for handling side effects like fetching data or working with the DOM.
Always clean up effects (e.g., clearInterval) to avoid memory leaks.

🔁 Next Focus
Learn about Conditional Rendering.
Explore Lists & Keys in React.
Start integrating API calls into components.