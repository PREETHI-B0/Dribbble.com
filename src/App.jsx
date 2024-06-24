// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ImageDetails from './components/ImageDetails/ImageDetails';
import Middle from './components/Middle/Middle';
import DesignGallery from './components/DesignGallery/DesignGallery';
import designs from './data'; // Corrected path to data.js
import './App.css';

const App = () => {
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchColor, setSearchColor] = useState('');

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Middle
                  setCategory={setCategory}
                  setSortOrder={setSortOrder}
                  setSearchTerm={setSearchTerm}
                  setSearchColor={setSearchColor}
                />
                <DesignGallery
                  designs={designs} // Pass designs to DesignGallery
                  category={category}
                  sortOrder={sortOrder}
                  searchTerm={searchTerm}
                  searchColor={searchColor}
                />
              </>
            } 
          />
          <Route path="/image/:id" element={<ImageDetails designs={designs} />} /> {/* Pass designs to ImageDetails */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
