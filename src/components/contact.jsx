import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../assets/css/contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const [status, setStatus] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const details = {
            name: name,
            email: email,
            message: message
        };
        console.log("Form submitted", details);
        setName('');
        setEmail('');
        setMessage('');
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message sent successfully !',
          });
    }
  return (
    <section className="contact-section mt-5" id='contact-us' >
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="container-contact mt-3">
        <div className="contact-form">
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
            {/* {status && <div className="alert alert-success mt-3">{status}</div>} */}
        </div>
        <div className="contact-image">
          <img
            src="https://animatetoeducate.com.au/wp-content/uploads/2021/01/contact-us.png"
            alt="Contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;