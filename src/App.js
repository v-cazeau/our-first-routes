import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./scenes/Login.jsx"
import Signup from "./scenes/Signup.jsx"
import './App.css';

function App() {
  const [ user, setUser ] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className="App-link">Home</Link> |&nbsp;
            <Link to="/login" className="App-link">Login</Link> |&nbsp;
            <Link to="/signup" className="App-link">Sign Up</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
