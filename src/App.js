import HomeScreen from "./screens/HomeScreen";
import LogIn from "./LoginScreen/index";
import SignUp from "./SignUpScreen/index";
import ResetPassword from "./LoginScreen/ResetPassword";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Classes from "./ClassesScreen/index";
import Team from "./TeamScreen";
import WeightCalculator from "./WeightCalculatorScreen";
import UserProfile from "../src/UserProfile";
import Schedule from "../src/UserProfile/Schedule";
import Profile from "./UserProfile/profile";
import AboutUs from './Components/AboutUs'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookClass from "./UserProfile/BookClass";
import LogOut from "./Components/LogOut";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/bmi" element={<WeightCalculator />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/personalprofile" element={<Profile />} />
          <Route path="/bookclass" element={<BookClass />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
