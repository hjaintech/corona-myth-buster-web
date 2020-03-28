import React from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Landing from './pages/Landing';

function App() {
  ReactGA.initialize('UA-162072812-1');
  ReactGA.pageview('landing');
  return <Landing />;
}

export default App;
