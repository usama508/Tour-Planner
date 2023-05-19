
import './App.css';
import TopBar from '../src/components/TopBar'
import NavBar from '../src/components/NavBar'
import Hero from './components/Hero'
import Activities from './components/Activities';
import Booking from './components/Booking';
function App() {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Hero/>
      <Activities/>
      <Booking/>
    </div>
  );
}

export default App;
