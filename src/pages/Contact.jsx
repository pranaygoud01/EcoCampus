import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Feedback",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to your backend / email service
    console.log("Submitted Data:", formData);

    setStatus("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", category: "Feedback", message: "" });
  };

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* LEFT - Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Have a question, feedback, or want to report an issue?  
            We’d love to hear from you! Fill out the form or use the details below.
          </p>

          <div className="mt-8 space-y-5 text-gray-700 text-sm md:text-base">
            <p>📍 <span className="font-medium">Address:</span> Hyderabad, Telangana, India</p>
            <p>📞 <span className="font-medium">Phone:</span> +91 8919262896</p>
            <p>✉️ <span className="font-medium">Email:</span> support@example.com</p>
          </div>
        </div>

        {/* RIGHT - Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:outline-none"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:outline-none"
              >
                <option>Feedback</option>
                <option>Report a Bug</option>
                <option>Business Inquiry</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-green-600 text-sm font-medium">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
