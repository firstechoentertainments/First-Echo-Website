import Landing from './Components/Landing.jsx';
import Navbar from './Components/Navbar.jsx';
import Stats from './Components/Stats.jsx';
import Events from './Components/Events.jsx';
import Services from './Components/Services.jsx';
import Brands from './Components/Brands.jsx';
// import Team from './Components/Team.jsx';
import Masonry from './Components/Masonry.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <div>
        <Navbar />
        <Landing />
        <Events />
        <Services />
        <Stats />
        <Masonry />
        <Brands />
        {/* <Team /> */}
        <Footer />
    </div>
  )
}

export default App