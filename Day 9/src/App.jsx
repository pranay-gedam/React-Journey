import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './About';
import User from './Components/User';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Home/> </>
    },
    {
      path: "/login",
      element: <> <Navbar/> <Login/> </>
    },
    {
      path: "/about",
      element: <> <Navbar/> <About/> </>
    },
    {
      path: "/user/:username",
      element: <> <Navbar/> <User/> </>
    },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
