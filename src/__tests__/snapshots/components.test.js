import React from 'react';
import renderer from 'react-test-renderer';
import {
  Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';
import Calculator from '.../../../components/calculator';
import Home from '.../../../components/Home';
import Nav from '.../../../components/Nav';
import Quote from '.../../../components/Quote';

describe('run screenshots test for each component', () => {
  test('Nav Component renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Nav />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Routes Work correctly', () => {
    const tree = renderer.create(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
