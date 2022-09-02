import './App.css';
import Home from './Home';
import About from './About';
import Listings from './Listings';
import ContactUs from './ContactUs';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/contact-us">
        <ContactUs />
      </Route>
      <Route  path="/about">
        <About />
      </Route>
      <Route  path="/listings">
        <Listings />
      </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
