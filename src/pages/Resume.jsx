

const Resume = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-3 text-primary">Resume</h2>
            <p className="lead mb-4 rounded text-secondary" style={{ fontSize: "1.2rem" }}>
                Here is a summary of my skills. I am currently working on my resume.
            </p>
            <h3 className="mb-3 text-primary mt-5 text-center">Languages/Technologies:</h3>
            <ul className="list-group mb-4">
                <li className="list-group-item">HTML, React</li>
                <li className="list-group-item">JavaScript + TypeScript</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">PostgreSQL, MongoDB</li>
                </ul>
        </div>
    );
};

export default Resume;