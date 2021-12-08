import { Link } from 'react-router-dom';
import './css/nav.css';

const Nav = () => (
  <nav className="d-flex rows">
    <h1>Math Magicians</h1>
    <ul className="d-flex">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Nav;
