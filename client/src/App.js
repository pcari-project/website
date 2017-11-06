import React from 'react';
import './App.css';
import NavBar from './NavBar';

const leftItems = [
  { as: "a", content: "Home", key: "home", href:'/'},
  { as: "a", content: "About Us", key: "about-us", href:'/about'},
  { as: "a", content: "The Team", key: "team", href:'/team'},
  { as: "a", content: "Activities", key: "activities", href:'/activities' },
  { as: "a", content: "Live Data", key: "live-data" },
  { as: "a", content: "Contact", key: "contact", href:'/contact' }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

const App = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems}/>
);

export default App;