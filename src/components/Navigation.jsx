import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <NavLink className="navbar-brand" to="/">James Lee</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
