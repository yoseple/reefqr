import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your own service ID, template ID, and user ID from EmailJS
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="min-h-screen bg-[#EDF2F4] p-8">
      <h1 className="text-4xl font-bold text-center text-[#2B2D42] mb-8">Help Center</h1>

      <p className="max-w-4xl mx-auto mt-4 text-[#2B2D42] text-lg text-center">
        Need assistance? We're here to help! Use the form below to contact us directly. We'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-[#EF233C] mb-6">Contact Us</h2>
        
        {submitted ? (
          <p className="text-center text-green-500 text-lg">Thank you! Your message has been sent successfully.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-[#2B2D42]">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 p-3 border rounded-md bg-[#EDF2F4] focus:outline-none focus:ring focus:ring-[#EF233C]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-[#2B2D42]">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 border rounded-md bg-[#EDF2F4] focus:outline-none focus:ring focus:ring-[#EF233C]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-[#2B2D42]">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 p-3 border rounded-md bg-[#EDF2F4] focus:outline-none focus:ring focus:ring-[#EF233C]"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#EF233C] text-white text-lg font-semibold rounded-md hover:bg-[#D90429] transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Help;