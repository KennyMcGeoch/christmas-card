import './App.css';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import snowOne from './SnowOne';
import snowTwo from './SnowTwo';
import snowThree from './SnowThree';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
let weather = snowOne
let salutation = "Dear"
let recipient = "Bomme"
let sender = "Kenny"
let greetingMsg = "I wish you a Merry Christmas and a Happy New Year"
  return (
    <div className="App">
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={weather}/>
      <header className="App-header">
        <h1 id="zindex">{salutation} {recipient} <br/><br/><br/>
        
        {greetingMsg} <br/><br/><br/>
        
        From {sender}</h1>
      </header>
    </div>
  );  
}

export default App;
