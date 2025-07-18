const ResultCard = ({ result }) => (
  <div className="mt-6 p-4 bg-gray-100 rounded shadow">
    <h3 className="text-xl font-semibold mb-2">Career Suggestions</h3>
    <pre className="whitespace-pre-wrap">{result}</pre>
  </div>
);
export default ResultCard;
