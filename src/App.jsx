import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import {Container} from 'react-bootstrap'; // Example from react-bootstrap

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AppointmentForm from './Components/AppointmentForm'
import BloodSearch from "./Components/BloodSearch";
import UrgentBloodNeeded from './Components/UrgentBloodNeeds'
import HealthSafetyInfo from './Components/HealthSafetyInfo'
import Testimonials from './Components/Testimonials'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

 
// Main App Component
function App() {
  return (
   <>
   <Header/>
   <Hero/> 
   <AppointmentForm/> 
   <BloodSearch/>
   <UrgentBloodNeeded/>
   <HealthSafetyInfo/>
<Testimonials/>
<ContactForm/>
<Footer/>
   </>
  );
}

export default App;
