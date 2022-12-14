import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import ContactUs from './pages/ContactUs';
import NavBar from './components/NavBar';
import Location from './pages/Location';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer';
import Entries from './components/Entries';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact-us'>
            <ContactUs />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/listings'>
            <Listings />
          </Route>
          <Route path='/location'>
            <Location />
          </Route>
          <Route path='/entries'>
         <Entries/>
          </Route>
        </Switch>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
