// import logo from './logo.svg';
import './App.css';

//components
// import { AlexCard } from './components/alexCard';
// import { HeroGif } from './components/heroGif';
// import { ExampleNavBar } from './components/ExampleNavBar';
// import { OldAboutMe } from './components/OldAboutMe'
//about me component
//blog component (want this feature to look like a num pad on desktop/ single image on screen)
//skills component 
//email me component

//Router
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/NavbarComponent";
import Dogs from './pages/Dogs';
// import Cats from './pages/Cats';
// import Sheeps from './pages/Sheeps';
// import Goats from './pages/Goats';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';

// Have I not been deploying? oh shit! run: npm run deploy

function App() {
  return (
    <Dogs/>
    // <Router>
    //   {/* <ExampleNavBar></ExampleNavBar> */}
    //   <Navbar></Navbar>
    //   <OldAboutMe/>
    //   <Routes>
    //     <Route path='/react-gh-pages' element={<Dogs/>} />
    //     <Route path='/cats' element={<Cats/>} /> 
    //     {/* <Route path='/sheeps' exact component={Sheeps}/> */}
    //     {/* <Route path='/goats' exact component={Goats}/> */}
    //   </Routes> 
    //   <div className="App">
    //     <header className="App-header">
    //       <HeroGif></HeroGif>
    //       <AlexCard></AlexCard>
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload. 
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
      
    // </Router>
  );
}

export default App;
