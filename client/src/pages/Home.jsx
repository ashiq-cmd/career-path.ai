// client/src/pages/Home.jsx
import React, { useState } from 'react';
import CareerForm from '../components/CareerForm';

const Home = () => {
  const [careerPath, setCareerPath] = useState('');

  const handleSubmit = async (interests) => {
    try {
      const res = await fetch('http://localhost:5000/api/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ interests }),
      });

      const data = await res.json();
      setCareerPath(data.careerPath);
    } catch (err) {
      console.error('API error:', err);
      setCareerPath('Sorry, failed to generate career path.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">AI Career Guidance Platform</h1>
      <CareerForm onSubmit={handleSubmit} />
      {careerPath && (
        <div className="mt-10 p-6 bg-white shadow rounded max-w-2xl mx-auto text-left">
          <h2 className="text-xl font-semibold mb-2">Suggested Career Path:</h2>
          <p>{careerPath}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
