# Day 11 - useMemo Hook in React

## 📌 Topics Covered
- What is **useMemo** and why it’s useful
- Difference between **useMemo** and **useEffect**
- Memoization to optimize expensive calculations
- Preventing unnecessary re-renders
- Dependency array and how it controls memoization

## 📝 Key Notes
- `useMemo` caches the result of a function so it doesn’t re-run on every render  
- Syntax:  
  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

Runs only when dependencies change
Great for heavy calculations, filtered lists, or derived data
Should not be overused – mainly for performance optimization

📖 Learning

Learned how useMemo improves performance by avoiding recalculations
Implemented memoization in a heavy calculation function
Understood that useMemo is useful when a function is computationally expensive
Learned that it should be used only when necessary

🎯 Next Focus

Learn about useCallback hook to memoize functions and prevent unnecessary re-creations