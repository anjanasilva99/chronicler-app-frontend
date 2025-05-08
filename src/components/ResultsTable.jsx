import React from 'react';

function ResultsTable({ results }) {
  return (
    <div className="card">
      <div className="card-header">Detailed Results</div>
      <div className="card-body table-container">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">List 1 (Sorted)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">List 2 (Sorted)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.sortedList1.map((val, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap">{idx}</td>
                <td className="px-6 py-4 whitespace-nowrap comparison-value">{val}</td>
                <td className="px-6 py-4 whitespace-nowrap comparison-value">{results.sortedList2[idx]}</td>
                <td className="px-6 py-4 whitespace-nowrap distance-value">{results.distances[idx]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap font-bold">Total</td>
              <td></td>
              <td></td>
              <td className="px-6 py-4 whitespace-nowrap distance-value">{results.totalDistance}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ResultsTable;