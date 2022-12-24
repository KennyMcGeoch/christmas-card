import './App.css';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import salut from './Salutation'
import getPeople from './Persons';
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

let customData =document.URL.toString().slice(46)
let weather
if (customData[0] === "1"){
  weather = snowOne
}
else if (customData[0] === "2"){
  weather = snowTwo
}
else{
  weather = snowThree
}

let salutation = salut(customData[1])
let senders = getPeople(customData.slice(2))
  return (
    <div className="App">
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={weather}/>
      <header className="App-header">
        <h1 id="zindex">{salutation[0]} {senders[0]} <br/><br/><br/>
        
        {salutation[1]} <br/><br/><br/>
        
        {salutation[2]}<br/> <br/>{senders[1]}</h1>
      </header>
    </div>
  );  
}

export default App;
