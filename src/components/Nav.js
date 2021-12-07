import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>Math Magicians</h1>
    <Link to="/">Home</Link>
    <Link to="/calculator">Calculator</Link>
    <Link to="/quote">Quote</Link>
  </nav>
);

export default Nav;
