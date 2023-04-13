import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <h1>SOLID Principles</h1>
      <nav>
        <ul>
          <li>
            <Link to="/open-close">Open Close</Link>
          </li>
          <li>
            <Link to="/single-responsibility">Single Responsibility</Link>
          </li>
          <li>
            <Link to="/liskov-substitution">Liskov Substitution</Link>
          </li>
          <li>
            <Link to="/interface-segregation">Interface Segregation</Link>
          </li>
          <li>
            <Link to="/dependency-inversion">Dependency Inversion</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
};

