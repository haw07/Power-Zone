import Header from '../Components/Header'
import ChooseUs from '../Components/ChooseUs'
import Footer from '../Components/Footer'
import GetTouch from '../Components/GetTouch'
import Banner from '../Components/Banner'
import Team from '../Components/Team'
import Pricing from '../Components/Pricing'

function HomeScreen() {
  return (
    <>
      <Header />
      <ChooseUs/>
      <Banner />
      <Pricing />
      {/* <Team /> */}
      <GetTouch />
      <Footer />
    </>
  )
}

export default HomeScreen