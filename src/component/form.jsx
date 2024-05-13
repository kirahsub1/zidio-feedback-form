import React, { useState } from 'react';
import "../css/form.css";
import starIcon1 from "../image/Star.png";
import starIcon2 from "../image/Star (1).png";

function form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the feedback data to a server, for example
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    // Optionally, you can reset the form after submission
    setName('');
    setEmail('');
    setFeedback('');
  };
     const handleCancel = () => {
    // Reset the form fields when cancel button is clicked
    setName('');
    setEmail('');
    setFeedback('');
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4"> Feedback Form </h2>
      <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}></form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 ">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 ">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        <strong>
          <p className="mb-4">Share your experience in scaling</p>
        </strong>
        <div className="flex flex-row mb-2">
          <img src={starIcon1} alt="star" />
          <img src={starIcon1} alt="star" />
          <img src={starIcon1} alt="star" />
          <img src={starIcon1} alt="star" />
          <img src={starIcon2} alt="litestar" />
        </div>

        <div className="mb-4">
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            placeholder="Enter your feedback"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default form;
