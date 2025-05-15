import React, { useState } from "react";
import '../assets/css/feedback.css';
import Swal from "sweetalert2";
const FeedbackSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
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
                type="submit"
                className="btn w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Submit
                <i className="fab fa-telegram-plane text-xl"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
