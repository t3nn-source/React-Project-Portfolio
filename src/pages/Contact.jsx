import React from "react";

// Contact component that renders a contact form for users to reach out
// It includes fields for name, email, and message



const Contact = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-3 text-primary">Contact Me</h2>
            <p className="lead mb-4, rounded text-secondary" style={{ fontSize: "1.2rem" }}>
                If you have any questions or would like to work together, please feel free to reach out.
                This portolio currently does not have a working contact form, but you can reach me through my email or LinkedIn.
                <br />
            </p>
            <form className="container mt-5" style={{ maxWidth: "600px" }}>
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" required />
                <label className="form-label" htmlFor="email">Email:</label>
                <input className="form-control" type="email" id="email" name="email" required />
                <label className="form-label" htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" name="message" required></textarea>
                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;