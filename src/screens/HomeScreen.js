import Header from "../Components/Header";
import ChooseUs from "../Components/ChooseUs";
import Footer from "../Components/Footer";
import GetTouch from "../Components/GetTouch";
import Banner from "../Components/Banner";
import Pricing from "../Components/Pricing";
import NavBar from "../Components/NavBar";
function HomeScreen() {
  return (
    <div class="main">
      <Header />
      <ChooseUs />
      <Banner />
      <Pricing />
      <GetTouch />
      <Footer />
    </div>
  );
}

export default HomeScreen;
