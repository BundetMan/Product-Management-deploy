import React, { useState } from 'react';
import '../assets/css/contact.css';
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const payload = { name, email, message };

    try {
      const response = await fetch('https://product-service-deploy-production.up.railway.app/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Failed to send: ' + result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
    finally {
      setLoading(false);
    }
};

   return (
    <section className="contact-section mt-5" id='contact-us' >
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="container-contact mt-3">
        <div className="contact-form">
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}  // disable inputs when loading
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : 'Submit'}
            </button>
          </form>
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