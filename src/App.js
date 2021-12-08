/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
