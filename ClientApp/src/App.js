import HomeScreen from "./screens/HomeScreen";
import LogIn from "./LoginScreen/index";
import SignUp from "./SignUpScreen/index";
import ResetPassword from "./LoginScreen/ResetPassword";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Classes from "./ClassesScreen/index";
import Team from "./TeamScreen";
import WeightCalculator from "./WeightCalculatorScreen";
import TraineesList from './TrainerProfile/TraineesList'
import TraineeEditForm from './TrainerProfile/TraineeEditForm'
import TrainerProfile from '../src/TrainerProfile';
import TProfile from './TrainerProfile/TrainerProfile'
import EditProfileT from './TrainerProfile/EditProfileT'
import ArrangeClass from './TrainerProfile/ArrangeClass'
import UserProfile from "../src/UserProfile";
import Schedule from "../src/UserProfile/Schedule";
import Profile from "./UserProfile/profile";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookClass from "./UserProfile/BookClass";
import LogOut from "./Components/LogOut";
import TSchedule from './TrainerProfile/TSchedule'
import EditProfile from "./UserProfile/EditProfile";
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
          <Route path="/tschedule" element={<TSchedule />}/>
          <Route path="/traineeslist" element={<TraineesList />}/>
          <Route path="/arrangeclass" element={<ArrangeClass />}/>
          <Route path="/bmi" element={<WeightCalculator />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/personalprofile" element={<Profile />} />
          <Route path="/bookclass" element={<BookClass />} />
          <Route path="/trainerprofile" element={<TrainerProfile />} />
          <Route path="/tprofile" element={<TProfile />} />
          <Route path="/editprofilet" element={<EditProfileT />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/edittraineeprofile" element={<TraineeEditForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" />
          {/* <Route path="/editprofilet" element={<EditProfileT />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
