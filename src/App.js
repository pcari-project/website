
import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Banner from './Banner';
import ActivitiesSection from './ActivitiesSection';
import Footer from './Footer';


const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "About Us", key: "about-us" },
  { as: "a", content: "Team", key: "team" },
  { as: "a", content: "Activities", key: "activities" },
  { as: "a", content: "Live Data", key: "live-data" },
  { as: "a", content: "Contact", key: "contact" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

const App = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems}>
    <Banner/>
    <ActivitiesSection/>
    <Footer/>
  </NavBar>
);

export default App;