
const About = () => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img
                        src="/images/portfolioPic.JPEG"
                        alt="Photo of Me"
                        className="img-fluid rounded-circle"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                    />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-3 text-primary">About Me</h2>
                    <p className="lead mb-4, rounded text-secondary" style={{ fontSize: "1.2rem" }}>      
                        Hello! I am an aspiring web developer with a passion for building web applications,
                        currently attending a coding bootcamp, where I am learning full-stack development.
                        Growing up, I was always fascinated by technology, and I loved taking things apart to see how they worked.
                        Curiousity led me to explore the world of programming, and I quickly fell in love with it.
                    </p>
                    <p className="lead mb-4, rounded text-secondary" style={{ fontSize: "1.2rem" }}>
                    I have experience in JavaScript, React, and Node.js, as well as Python.
                    I enjoy solving complex problems using logic, and learning new technologies.
                    I believe in the power of collaboration and teamwork, and I am always eager to learn from others.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;