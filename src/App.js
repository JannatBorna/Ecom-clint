import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/Page/About/About';
import Banner from './components/Page/Banner/Banner';
import Contact from './components/Page/Contact/Contact';
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login';
import NotFound from './components/Page/NotFound/NotFound';
import Register from './components/Page/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import WomenServices from './components/Page/WomenServices/WomenServices/WomenServices';
import MenServices from './components/Page/MenServices/MenServices/MenServices';
import BabyServices from './components/Page/BabyServices/BabyServices/BabyServices';
import Profile from './components/Page/Profile/Profile';
import AddCart from './components/Page/AddCart/AddCart';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/addcart">
             <AddCart />
           </Route>


            <Route exact path="/banner">
              <Banner />
            </Route>

            <Route exact path="/womenServices">
              <WomenServices />
            </Route>

            <Route exact path="/menServices">
              <MenServices />
            </Route>

            <Route exact path="/babyServices">
              <BabyServices />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;
