import React, { Fragment, lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './components/layout/navbar/Navbar';
import "./App.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SideIcons from './components/layout/side-icons/SideIcons';
import Spinner from './components/layout/Spinner';
const Work = lazy(() => import("./components/work/Work"));
const Home = lazy(() => import("./components/home/Home"));

AOS.init();

const App = () => {
  return (
    <Router>
    <Fragment>
    <Navbar />
    <SideIcons />
    <Switch>
    <Suspense fallback={<Spinner />}>
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    </Suspense>
    </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
