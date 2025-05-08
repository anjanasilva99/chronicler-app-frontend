import React from 'react';

function ResultsSummary({ results }) {
  return (
    <div className="card">
      <div className="card-header">Summary</div>
      <div className="card-body">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-medium mb-2">Total Distance</h5>
            <p className="result-highlight">{results.totalDistance}</p>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p><strong>Number of Pairs:</strong></p>
                <p>{results.count}</p>
              </div>
              <div>
                <p><strong>Average Distance:</strong></p>
                <p>{results.averageDistance}</p>
              </div>
              <div>
                <p><strong>Maximum Distance:</strong></p>
                <p>{results.maxDistance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsSummary;