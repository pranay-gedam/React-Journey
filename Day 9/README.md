# Day 9 - React Routing

## 📌 Topics Covered
- Introduction to **React Router**
- Setting up **BrowserRouter** in the app
- Using **Routes** and **Route** to define multiple pages
- Navigating with **Link** instead of anchor tags
- Using **useNavigate** hook for programmatic navigation
- Passing parameters with **Dynamic Routes**
- Handling a simple **Not Found (404)** page

## 📝 Key Notes
- React Router allows us to build **multi-page experiences** in a single-page React app  
- `BrowserRouter` wraps the entire app to enable routing  
- `Routes` is used to wrap all route definitions, and `Route` maps a path to a component  
- `Link` helps in navigation without reloading the page  
- `useNavigate` gives more control to navigate programmatically (e.g., after form submission)  
- Dynamic routes (`/user/:id`) allow us to pass data through the URL.

📖 Learning

Learned how to set up React Router in a project
Understood the importance of client-side routing for seamless navigation
Practiced defining routes, navigating between them, and handling dynamic routing
Experienced how useNavigate can improve user flow

🎯 Next Focus

Explore nested routes for structured navigation
Learn about Route parameters in detail
Handle protected routes (authentication-based routing)
Start integrating API data with routing for real-world scenarios