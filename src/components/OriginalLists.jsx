import React from 'react';

function OriginalLists({ lists }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card h-full">
        <div className="card-header">Original List 1</div>
        <div className="card-body">
          <div className="flex flex-wrap content-start">
            {lists[0].map((val, idx) => (
              <span key={idx} className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded m-1 min-w-16 text-center">
                {val}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card h-full">
        <div className="card-header">Original List 2</div>
        <div className="card-body">
          <div className="flex flex-wrap content-start">
            {lists[1].map((val, idx) => (
              <span key={idx} className="bg-gray-500 text-white text-sm font-medium px-3 py-1 rounded m-1 min-w-16 text-center">
                {val}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OriginalLists;