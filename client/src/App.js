import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
 const res = await axios.post("https://career-path-backend-1.onrender.com/generate-career-path", {
  interests: input,
});
          // <-- key must match backend
      ;
      setResult(res.data.careerPath);
    } catch (err) {
      console.error(err);
      setResult('Sorry, failed to generate career path.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">AI Career Guidance Platform</h1>

      <form onSubmit={handleSubmit}>
        <label className="block text-xl mb-2">Enter Your Interests</label>
        <textarea
          className="border p-3 w-full h-32"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., type your interests here..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
          Generate Career Path
        </button>
      </form>

      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Suggested Career Path:</h2>
          <pre className="mt-2 whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
