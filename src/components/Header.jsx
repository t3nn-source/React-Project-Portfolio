import Navigation from './Navigation';

// This component is responsible for rendering the header of the application.
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Navigation />
      </div>
    </nav>
  );
};

export default Header;