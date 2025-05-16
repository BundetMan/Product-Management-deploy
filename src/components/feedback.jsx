import React, { useState } from "react";
import '../assets/css/feedback.css';
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
const FeedbackSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { name, email, message };
    try {
      const response = await fetch('https://product-service-deploy-production.up.railway.app/feedback/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Feedback sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Failed to send: ' + result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="py-10 bg-gray-50">
      <div className="feedback-container max-w-2xl mx-auto px-4">
        <div className="feedback-content text-center">
          <h1 className="text-3xl font-bold mb-4">YOUR FEEDBACK IS IMPORTANT</h1>
          <p className="mb-6 text-gray-700">
            We value your feedback and would love to hear from you! Please fill out the form below to share your thoughts with us.
          </p>
          <form onSubmit={handleSubmit} className="feedback-form space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
                name="feedback"
                placeholder="What would you like to share with us?"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
                type="submit" disabled={loading}
            >
              {loading ? <span className="spinner-border spinner-border-sm"></span> : 'Send Feedback'}
                <i className="fab fa-telegram-plane text-xl"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
