import "./style.css";
import HomeScreen from "./screens/HomeScreen";
import LogIn from "./LoginScreen/index";
import SignUp from "./SignUpScreen/index";
import ResetPassword from "./LoginScreen/ResetPassword";
//import Team from "./Components/Team";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Classes from "./ClassesScreen/index";
import Team from "./TeamScreen";
import WeightCalculator from "./WeightCalculatorScreen";
//import TeamPage from "./screens/TeamPage";
// import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <WeightCalculator />
    </div>
  );
}

export default App;
