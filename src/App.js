import { useState, createContext } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Arun");
  return (
    <AppContext.Provider value={{ name, setName }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
