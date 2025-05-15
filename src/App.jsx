import React, { useState } from 'react';
import axios from 'axios';
import FileUploadForm from './components/FileUploadForm';
import ResultsSummary from './components/ResultsSummary';
import ResultsTable from './components/ResultsTable';
import OriginalLists from './components/OriginalLists';
import ErrorAlert from './components/ErrorAlert';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file) => {
  if (!file) {
    // Reset the results
    setResults(null);
    setError(null);
    return;
  }

  try {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("inputFile", file);

    const response = await axios.post(`${API_URL}/api/calculate`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) {
      setResults(response.data.data);
    } else {
      setError(
        response.data.error || "An error occurred while processing the file"
      );
    }
  } catch (err) {
    // Check if the error response contains data from the backend
    if (err.response && err.response.data && err.response.data.error) {
      setError(err.response.data.error);
    } else {
      setError(err.message || "An unexpected error occurred");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-background py-6 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="header">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Chronicler Distance Calculator</h1>
          <p className="text-lg md:text-xl">Calculate the minimum possible distance between two lists of numbers</p>
        </div>
        
        {/* File Upload Form */}
        <div className="mb-6 max-w-2xl mx-auto">
          <FileUploadForm 
            onFileUpload={handleFileUpload} 
            loading={loading} 
            hasResults={results !== null} 
          />
        </div>
        
        {/* Error Message */}
        {error && <ErrorAlert message={error} />}
        
        {/* Results Section */}
        {results && (
          <div className="space-y-6">
            <ResultsSummary results={results} />
            <ResultsTable results={results} />
            <OriginalLists lists={[results.originalList1, results.originalList2]} />
          </div>
        )}
        
        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>© 2025 Chronicler Distance Calculator</p>
        </footer>
      </div>
    </div>
  );
}

export default App;