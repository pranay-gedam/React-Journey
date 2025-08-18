# Day 12 - useCallback Hook in React

## 📌 Topics Covered
- What is **useCallback** and why it’s used
- Difference between **useMemo** and **useCallback**
- How `useCallback` helps in **function memoization**
- Preventing unnecessary re-creations of functions
- Improving performance when passing callbacks to child components

## 📝 Key Notes
- `useCallback` returns a **memoized version of a function**
- Syntax:  
  ```jsx
  const memoizedCallback = useCallback(() => {
    // function logic
  }, [dependencies]);

Useful when:

Passing functions to child components wrapped with React.memo
Avoiding re-renders caused by function identity changes

📖 Learning

Learned how useCallback avoids unnecessary function re-creations
Understood its importance with React.memo to optimize child component rendering
Explored difference between useMemo (for values) and useCallback (for functions)

🎯 Next Focus

Learn about handling forms in React
Connect React frontend with an Express backend for data handling