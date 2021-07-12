import './App.css';
import TopMenu from './components/navigation/TopMenu';
import MainMenu from './components/navigation/MainMenu';
import ShowCase from './components/ShowCase';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Footer from './components/navigation/Footer';


function App() {
  return (
    <div className="body">
      <TopMenu />
      <MainMenu />
      <ShowCase />
      <AboutUs />
      <Services />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
