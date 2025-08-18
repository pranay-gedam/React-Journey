# Day 10 - useContext Hook in React

## 📌 Topics Covered
- Introduction to **Context API** in React
- Why we use Context: avoiding **prop drilling**
- Creating a **Context** using `createContext`
- Providing values with **Context.Provider**
- Consuming values using **useContext** hook
- Sharing state across multiple components easily

## 📝 Key Notes
- Context API allows data to be shared globally without passing props down manually at every level  
- `createContext()` is used to create a context object  
- The **Provider** component supplies the value to its children  
- `useContext(SomeContext)` is the easiest way to consume context values in functional components  
- Great for **theme switching, authentication, and user preferences**  

📖 Learning

Understood how Context helps in managing global state
Practiced creating and consuming context using useContext
Implemented a simple theme toggle example using Context
Realized that Context works best for global, app-wide data rather than frequently changing data

🎯 Next Focus

Learn about useMemo hook to optimize performance and prevent unnecessary re-renders