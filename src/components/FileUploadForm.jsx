import React, { useRef, useState, useEffect } from 'react';

function FileUploadForm({ onFileUpload, loading, hasResults }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  
  // Reset form when hasResults changes to false
  useEffect(() => {
    if (!hasResults) {
      setFileName('');
    }
  }, [hasResults]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (hasResults) {
      // If we already have results, this acts as a reset button
      handleReset();
    } else {
      // Otherwise submit the file for processing
      const file = fileInputRef.current.files[0];
      if (file) {
        onFileUpload(file);
      }
    }
  };
  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };
  
  const handleReset = () => {
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setFileName('');
    
    // Tell the parent component to reset results
    if (typeof onFileUpload === 'function') {
      onFileUpload(null);
    }
  };
  
  return (
    <div className="input-form rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="p-5">
          <label className="block mb-2 text-lg font-medium">
            Select Input File:
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="block w-full text-gray-700 bg-white border border-gray-300 rounded-md py-2 px-4 mb-3"
            disabled={loading || hasResults}
          />
          
          {fileName && (
            <div className="text-sm text-gray-600 mb-2">
              Selected: <span className="font-medium">{fileName}</span>
            </div>
          )}
          
          <div className="text-sm text-gray-500 mb-4">
            The file should contain two numbers separated by space on each line.
          </div>
          
          <button
            type="submit"
            disabled={loading || (!hasResults && !fileName)}
            className={`w-full flex justify-center py-2 px-4 rounded font-medium transition-colors ${
              hasResults 
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' 
                : 'btn-primary'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              hasResults ? 'Reset Form' : 'Calculate Distance'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileUploadForm;