import React, { useState } from 'react';
import './Middle.css';
import { FaSearch, FaFilter, FaPalette } from 'react-icons/fa';
import { ChromePicker } from 'react-color';

const Middle= ({ setCategory, setSortOrder, setSearchTerm, setSearchColor }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [searchedColor, setSearchedColor] = useState('');

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setSearchColor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleColorInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchedColor(value);
  };

  const handleColorSearch = () => {
    const colorNames = [
      { name: 'red', hex: '#D21D1D' },
      { name: 'blue', hex: '#4409F1' },
      { name: 'white', hex: '#F3F7F8' },
      { name: 'saddlebrown', hex: '#F1E5B5' },
      { name: 'green', hex: '#07F607' },
      { name: 'black', hex: '#090B09' },
      { name: 'violet', hex: '#EE08F3' },
      { name: 'navy', hex: '#100359' },
      { name: 'orange', hex: '#F38008' },
      // Add more colors as needed
    ];

    // Check if searchedColor matches a color name or a color hex code
    const foundColor = colorNames.find(color =>
      color.name === searchedColor || color.hex === searchedColor
    );

    if (foundColor) {
      setColor(foundColor.hex);
      setSearchColor(foundColor.name); // Update parent state with the found color name
    } else {
      console.log('Color not found:', searchedColor);
      setColor('#ffffff'); // Reset to default white color
      setSearchColor(''); // Reset search color in parent state
    }
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="dropdown">
        <button className="dropbtn">Following<span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content" >
          <div>
            </div>
          <a href="#" onClick={() => setSortOrder('Following')} >Following </a> 
            <a href="#" onClick={() => setSortOrder('popular')}>Popular</a>
            <a href="#" onClick={() => setSortOrder('new')}>New & Noteworthy</a>
          </div>
        </div>
      </div>
      <div className="hero-middle">
        <nav className="categories">
          <a href="#" onClick={() => setCategory('')}>Discover</a>
          <a href="#" onClick={() => setCategory('animation')}>Animation</a>
          <a href="#" onClick={() => setCategory('branding')}>Branding</a>
          <a href="#" onClick={() => setCategory('illustration')}>Illustration</a>
          <a href="#" onClick={() => setCategory('mobile')}>Mobile</a>
          <a href="#" onClick={() => setCategory('print')}>Print</a>
          <a href="#" onClick={() => setCategory('product-design')}>Product Design</a>
          <a href="#" onClick={() => setCategory('typography')}>Typography</a>
          <a href="#" onClick={() => setCategory('web-design')}>Web Design</a>
        </nav>
      </div>
      <div className="hero-right">
        <button className="filter-btn" onClick={toggleFilters}>
          <FaFilter className="filter-icon" />
          Filters
        </button>
      </div>
      {showFilters && (
        <div className="filters-section">
          <div className="filter-box">
            <div className="filters-left">
              <h3>Tags</h3>
              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search tags..."
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="filters-right">
              <h3>Color</h3>
              <div className="color-search">
                <FaPalette className="color-icon" onClick={toggleColorPicker} />
                <input
                  type="text"
                  className="color-input"
                  placeholder="Enter color name or hex code"
                  value={searchedColor}
                  onChange={handleColorInputChange}
                />
                <button className="color-search-button" onClick={handleColorSearch}>
                  Search
                </button>
                {showColorPicker && (
                  <div className="color-picker">
                    <ChromePicker color={color} onChange={handleColorChange} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Middle;
