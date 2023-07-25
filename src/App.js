import "./App.css";

//components

import { ExampleNavBar } from "./components/ExampleNavBar";
import { OldAboutMe } from "./components/OldAboutMe";
import { BlogGracie } from "./components/BlogGracie";
//about me component
//blog component (want this feature to look like a num pad on desktop/ single image on screen)
//skills component
//email me component

//Router
import {
   BrowserRouter as Router,
   Routes,
   Switchcase,
   Route,
} from "react-router-dom";
// import Navbar from "./components/NavbarComponent";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";

import { Col, Container } from "reactstrap";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from 'reactstrap';

// Have I not been deploying? oh shit! run: npm run deploy

function App() {
   return (
      <div className="App">
         <header className="App-header"></header>
         <Container fluid style={{ padding: 0 }}>
            <Col style={{ padding: 0 }}>
               <Switchcase>
                  <Route exact path="/gracie">
                     <BlogGracie></BlogGracie>
                  </Route>
               </Switchcase>
               <Router>
                  {/* <ExampleNavBar></ExampleNavBar> */}
                  <ExampleNavBar />
                  <OldAboutMe />
                  <Routes>
                     <Route path="/" element={<Dogs />} />
                     <Route path="/cats" element={<Cats />} />
                  </Routes>
               </Router>
            </Col>
         </Container>
      </div>
   );
}

export default App;
.