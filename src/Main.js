import React from "react";
import Hello from "./sayHello"
import Formulaire from "./formulaire"
import Contact from "./contact"
import SimpleMap from "./SimpleMap"
import GallerieComponent from "./GallerieComponent"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import { Route,NavLink, HashRouter  } from "react-router-dom";

class Main extends React.Component{
  
  render() {
  return(
    <HashRouter>
    <div>
    <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Formulaire">Formulaire</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/gallerie">Gallerie</NavLink></li>
          </ul>
     
    </div>
    <div className="content">
            <Route exact path="/" component={Hello}/>
            <Route path="/contact" component={SimpleMap}/>
            <Route path="/Formulaire" component={Formulaire}/>
            <Route path="/gallerie" component={GallerieComponent}/>
          </div>
    </HashRouter>
  )
}
}

export default Main;

{/* <h1>React App component</h1>
{/* <Hello /> */}
{/* <Formulaire />   */}
{/*<Reservation /> */}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
