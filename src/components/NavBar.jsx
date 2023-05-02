/* eslint-disable */
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },

];
const NavBar = () => {
  <nav className="navbar">
    <ul>
      {
      links.map((link) => <li className="linkk" key={link.text}>
        <NavLink to={link.path}>
            {link.text}
        </NavLink>
        </li>,

      )

    }
     ,
    </ul>
  </nav>;
};

export default NavBar;
