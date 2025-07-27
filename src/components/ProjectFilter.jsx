import React, { useState, useEffect } from 'react';

const ProjectFilter = ({ projects, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const filters = ['all', 'reactjs', 'java', 'html-css-js'];

  return (
    <div className="flex gap-4 mb-8 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-[#00fff7] text-[#232526] hover:bg-[#00e6d2]'
              : 'bg-white/10 hover:bg-[#00fff7]/20'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
