import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";

const Nav = () => {
return<StyledNav>
  <nav>
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
      </StyledNav>
}
export default Nav