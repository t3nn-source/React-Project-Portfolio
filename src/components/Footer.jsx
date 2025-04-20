
const Footer = () => {
    return (
        // Footer component that displays the footer section of the webpage
        // It includes a github logo, a linkedin logo, and a third logo
        <footer className="bg-primary text-white text-center py-3 mt-5">

            <div className="container">
            <h3 className="mb-3 ">Connect with me:</h3>
            <a href="https://github.com/t3nn-source">
                <img className="me-3" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="30" height="30" />
            </a>
            <a href="https://www.linkedin.com/in/james-lee-29b2791b8/"><img className="me-3" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn" width="30" height="30" />
            </a>
            <a href = "https://stackoverflow.com/users/30322138/james-lee?tab=profile">
                <img className="me-3" src="https://cdn-icons-png.flaticon.com/128/2111/2111690.png" alt="Third Logo" width="30" height="30" />
            </a>
            <p className="mb-0 mt-3">© {new Date().getFullYear()} James Lee. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;