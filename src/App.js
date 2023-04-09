import "./style.css";
import HomeScreen from "./screens/HomeScreen";
import LogIn from "./LogInScreen/index";
import SignUp from "./SignUpScreen/index";
import ResetPassword from "./LogInScreen/ResetPassword";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Classes from "./ClassesScreen/index";
import Team from "./TeamScreen";
//import TeamPage from "./screens/TeamPage";
// import {Routes, Route} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/team" element={<Team />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;