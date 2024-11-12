import React, { useState, useEffect } from 'react';

const Header = () => {
  const [selectedDropdown1, setSelectedDropdown1] = useState('');
  const [selectedDropdown2, setSelectedDropdown2] = useState('');

  // Load saved values from localStorage when the component mounts
  useEffect(() => {
    const savedDropdown1 = localStorage.getItem('selectedDropdown1');
    const savedDropdown2 = localStorage.getItem('selectedDropdown2');

    if (savedDropdown1) setSelectedDropdown1(savedDropdown1);
    if (savedDropdown2) setSelectedDropdown2(savedDropdown2);
  }, []);

  const handleModelChange = (event) => {
    const value = event.target.value;
    setSelectedDropdown1(value);
    localStorage.setItem('selectedDropdown1', value); // Save to localStorage
    window.location.reload(); // Reload the page
  };

  const handleDropdown2Change = (event) => {
    const value = event.target.value;
    setSelectedDropdown2(value);
    localStorage.setItem('selectedDropdown2', value); // Save to localStorage
    window.location.reload(); // Reload the page
  };

  return (
    <div style={{ padding: '5px', borderRadius: '0px', display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <select
          id="dropdown1"
          value={selectedDropdown1}
          onChange={handleModelChange}
          style={{ border: 'none', fontSize: 'x-large', outline: 'none' }}
        >
          <option value="Llama 3.1">Llama 3.1</option>
          <option value="Mystral">Mystral</option>
          <option value="Falcon">Falcon</option>
        </select>
      </div>

      {/* <div>
        <select
          id="dropdown2"
          value={selectedDropdown2}
          onChange={handleDropdown2Change}
          style={{ border: 'none', fontSize: 'medium', outline: 'none' }}
        >
          <option value="summary">Summary</option>
          <option value="qa">Q & A</option>
        </select>
      </div> */}
    </div>
  );
};

export default Header;
