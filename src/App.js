import "./App.css";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import MyProfile from "./components/MyProfile";
import StudyMaterial from "./components/StudyMaterial";
function App() {
  const [clicked, setClicked] = useState(true);
  const [name, setName] = useState("User");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element=<LoginPage /> />
        <Route
          path="/login/register"
          element=<RegisterPage name={name} setName={setName} />
        />
        <Route
          path="/login/register/dashboard"
          element=<Dashboard
            clicked={clicked}
            setClicked={setClicked}
            name={name}
            setName={setName}
          />
        />
        <Route path="/login/register/profile" element={<MyProfile />} />
        <Route
          path="/login/register/studymaterial"
          element={<StudyMaterial />}
        />
      </Routes>
    </div>
  );
}

export default App;
