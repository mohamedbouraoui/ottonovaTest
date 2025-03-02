import './App.css';
import CityMap from './components/MapComponenet';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactComponent from './components/ContactComponent';
import AboutUs from './components/AboutUs';
import CityList from './components/CityList';



export default function App() {
  return (
    <div>
      <Header/>
      <CityMap />
      <CityList/>
      <AboutUs/>
      <ContactComponent/>
      <Footer/>
    </div>
  );
}

