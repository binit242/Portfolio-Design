import Home from "./components/Home";
import Secondsec from "./components/secondsec";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ScrollVelocity from './components/ScrollVelocity';

function App() {
  const velocity = 2; 

  return (
    <div className="w-full overflow-x-hidden">
      <Home />

      <ScrollVelocity text="Welcome To My Portfolio"/>

      <Secondsec />
      <ScrollVelocity text="ABOUT ME"/>
      <About />
      
      <Work/>
      {/* <ScrollVelocity text="CONTACT"/> */}
      <Contact />

    </div>
  );
}

export default App;
