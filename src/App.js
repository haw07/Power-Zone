import './style.css'
import HomeScreen from './screens/HomeScreen'
import LogIn from './LogInScreen/index'
import SignUp from './SignUpScreen/index'
import Profile from './Components/Profile'
import ResetPassword from './LogInScreen/ResetPassword'
import P from './Components/p'
import Team from './Components/Team'
import NavBar from './Components/NavBar'
import ErrorPage from './Components/ErrorPage'
import Contact from './Components/Contact'
import Classes from './ClassesScreen/index'

// import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      {/* <Routes> 
      <Route index path="" element ={<HomeScreen/>}/>
      {/* <Route path="/logIn" element ={<LogIn/>}/> */}
      {/* </Routes> */}
      {/* <HomeScreen /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <Profile />
      <P /> */}
      {/* <ErrorPage /> */}
      {/* <Contact /> */}
      <Classes />
      {/* <Team /> */}
      {/* <ResetPassword /> */}
    </div>
  );
}

export default App;