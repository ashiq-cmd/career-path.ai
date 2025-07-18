// client/src/components/CareerForm.jsx
import React, { useState } from 'react';

const CareerForm = ({ onSubmit }) => {
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (interests.trim() === '') return;
    onSubmit(interests);
    setInterests('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10">
      <label className="block mb-2 text-lg font-semibold">Enter Your Interests</label>
      <textarea
        rows="4"
        className="w-full p-3 border rounded shadow"
        placeholder="Ex: I love AI, design, and teaching..."
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate Career Path
      </button>
    </form>
  );
};

export default CareerForm;

