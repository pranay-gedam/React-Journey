# Day 13 - Handling Forms & Connecting React to Express

## 📌 Topics Covered
- Basics of **form handling** in React  
- Managing **controlled components** with `useState`  
- Handling form **submission events**  
- Connecting React frontend to an **Express backend**  
- Sending and receiving data using **fetch / Axios**  

## 📝 Key Notes
- Controlled components keep form inputs synced with state:
  ```jsx
  const [name, setName] = useState("");
  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

Always prevent default form refresh using event.preventDefault()
Data can be sent to Express backend with a POST request
Express handles requests with:

app.post("/api/data", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

Ensured CORS setup for frontend-backend communication

📖 Learning

Learned how to create controlled forms in React
Understood how to connect frontend and backend using fetch API
Practiced handling form submission and integrating with Express server

🎯 Next Focus

Learn about Redux for global state management in React