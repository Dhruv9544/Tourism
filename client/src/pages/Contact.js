import React from "react";

const Contact = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-lg">
          Have a question or want to collaborate with us? Drop us a message
          below, and we'll get back to you as soon as possible.
        </p>
      </div>

      <form className="mb-6">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-lg font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-gray-300 border rounded-lg px-4 py-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-lg font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-gray-300 border rounded-lg px-4 py-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border-gray-300 border rounded-lg px-4 py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <ul className="list-disc list-inside">
          <li>
            Email: <a href="mailto:tourismteam@gov.in">tourismteam@gov.in</a>
          </li>
          <li>Phone: +91 8569743214</li>
          {/* Add more contact details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
