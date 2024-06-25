import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Meet Our Team</h2>
        <ul className="list-disc list-inside">
          <li>Uday</li>
          <li>Dhruv</li>
          <li>Harsh</li>
          <li>Nishant</li>
          <li>Hemangi</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Project: Tourism</h2>
        <p className="text-lg">
          Describe your tourism project here. Include details about what the
          project aims to achieve, technologies used, and any notable features
          or achievements.
        </p>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
