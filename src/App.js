import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function Home() {
  return <h2 className="text-center text-4xl font-bold mt-10">Home Page</h2>;
}

function About() {
  return <h2 className="text-center text-4xl font-bold mt-10">About Page</h2>;
}

function Contact() {
  return <h2 className="text-center text-4xl font-bold mt-10">Contact Page</h2>;
}

function NotFound() {
  return (
    <h2 className="text-red-600 text-center text-6xl font-bold mt-10">
      Page Not Found
    </h2>
  );
}

function UserProfile() {
  let { username } = useParams();
  return (
    <div className="text-center text-4xl font-bold mt-10">
      <span>Profile of </span>

      <span className="text-6xl text-blue-600 hover:underline ml-5">
        {username}
      </span>
    </div>
  );
}

function Login() {
  let navigate = useNavigate();

  function handleLogin() {
    // Perform login logic...
    navigate("/"); // Redirect user after login
  }
  return (
    <div className="text-center text-4xl font-bold mt-10">
      <h2 className="mb-10">Login Page</h2>
      <botton className="bg-blue-500 px-4 py-2 shadow-md rounded text-white" onClick={handleLogin}>Login</botton>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/user">User</Link> |
        <Link to="/login">Login</Link> |
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/user" element={<h2 className="text-center text-4xl font-bold mt-10">User Page</h2>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
