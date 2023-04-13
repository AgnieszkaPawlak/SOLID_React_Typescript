import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'


export const Navbar = () => {
  return <nav className={styles.nav}>
    <ul>
        <li>
        <Link to="/single-responsibility">S</Link>
        </li>
        <li>
        <Link to="/open-close">O</Link>
        </li>
        <li>
        <Link to="/liskov-substitution">L</Link>
        </li>
        <li>
        <Link to="/interface-segregation">I</Link>
        </li>
        <li>
        <Link to="/dependency-inversion">D</Link>
        </li>
    </ul>
    </nav>
};
