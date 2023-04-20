import HomeScreen from "./screens/HomeScreen";
import LogIn from "./LoginScreen/index";
import SignUp from "./SignUpScreen/index";
import ResetPassword from "./LoginScreen/ResetPassword";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Classes from "./ClassesScreen/index";
import Team from "./TeamScreen";
import WeightCalculator from "./WeightCalculatorScreen";
import TraineesListT from "./TrainerProfile/TraineesListT";
import TraineeEditForm from "./TrainerProfile/TraineeEditForm";
import EditProfileO from "./OwnerProfile/EditProfileO";
import TrainerProfile from "../src/TrainerProfile";
import TProfile from "./TrainerProfile/TrainerProfile";
import EditProfileT from "./TrainerProfile/EditProfileT";
import ArrangeClass from "./TrainerProfile/ArrangeClass";
import UserProfile from "../src/UserProfile";
import Schedule from "../src/UserProfile/Schedule";
import TrainersListO from "./OwnerProfile/TrainersListO";
import Profile from "./UserProfile/profile";
import AboutUs from "./Components/AboutUs";
import OwnerProfile from "../src/OwnerProfile";
import OProfile from "./OwnerProfile/OwnerProfile";
import TraineesListO from "./OwnerProfile/TraineesListO";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookClass from "./UserProfile/BookClass";
import LogOut from "./Components/LogOut";
import TSchedule from "./TrainerProfile/TSchedule";
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
          <Route path="/tschedule/:email" element={<TSchedule />} />
          <Route
            path="/traineeslisttrainer/:email"
            element={<TraineesListT />}
          />
          <Route path="/arrangeclass/:email" element={<ArrangeClass />} />
          <Route path="/bmi" element={<WeightCalculator />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/schedule/:email" element={<Schedule />} />
          <Route path="/personalprofile/:email" element={<Profile />} />
          <Route path="/trainerslist" element={<TrainersListO />} />
          <Route path="/bookclass/:email" element={<BookClass />} />
          <Route path="/trainerprofile" element={<TrainerProfile />} />
          <Route path="/ownerprofile" element={<OwnerProfile />} />
          <Route path="/oprofile" element={<OProfile />} />
          <Route path="/traineeslistowner" element={<TraineesListO />} />
          <Route path="/tprofile/:email" element={<TProfile />} />
          <Route path="/editprofilet/:email" element={<EditProfileT />} />
          <Route path="/editprofileo" element={<EditProfileO />} />
          <Route path="/editprofile/:email" element={<EditProfile />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/edittraineeprofile/:email" element={<TraineeEditForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
