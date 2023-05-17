
import './App.css';
import TopBar from '../src/components/TopBar'
import NavBar from '../src/components/NavBar'
import Hero from './components/Hero'
import Activities from './components/Activities';
function App() {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Hero/>
      <Activities/>
    </div>
  );
}

export default App;
