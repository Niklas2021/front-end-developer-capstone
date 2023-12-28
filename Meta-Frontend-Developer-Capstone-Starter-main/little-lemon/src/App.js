import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Nav from './components/nav';

const App = () => {
  return (
    <Router>
      <Nav />
      <Header/>
      <Main/>

      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/reservations" component={Reservations} />
        <Route path="/order" component={OrderOnline} />
        <Route path="/login" component={Login} />
      </Routes>

      <footer>
        {/* Hier kannst du den Footer-Inhalt einfügen */}
      </footer>
    </Router>
  );
};

// Komponenten für die einzelnen Seiten

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const Menu = () => {
  return <h1>Menu Page</h1>;
};

const Reservations = () => {
  return <h1>Reservations Page</h1>;
};

const OrderOnline = () => {
  return <h1>Order Online Page</h1>;
};

const Login = () => {
  return <h1>Login Page</h1>;
};

export default App;
