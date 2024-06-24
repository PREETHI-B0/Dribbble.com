// src/components/DesignGallery/DesignGallery.jsx
import React, { useState, useEffect } from 'react';
import DesignCard from '../DesignCard/DesignCard';
import designs from '../../data';
import Footer from '../Footer/Footer';
import './DesignGallery.css';

const DesignGallery = ({ category, sortOrder, searchTerm, searchColor }) => {
  const [filteredDesigns, setFilteredDesigns] = useState([]);
  const [visibleDesigns, setVisibleDesigns] = useState(8); // Initial number of designs to show

  useEffect(() => {
    let filtered = designs;

    // Filter by category
    if (category) {
      filtered = filtered.filter((design) => design.tags.includes(category));
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((design) =>
        design.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by search color (both name and hex code)
    if (searchColor) {
      filtered = filtered.filter((design) =>
        design.color.toLowerCase() === searchColor.toLowerCase() ||
        design.colorHex.toLowerCase() === searchColor.toLowerCase()
      );
    }

    // Sort by sortOrder ('popular', 'new', 'following')
    if (sortOrder === 'popular') {
      filtered = filtered.sort((a, b) => b.likes - a.likes);
    } else if (sortOrder === 'new') {
      filtered = filtered.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    } else if (sortOrder === 'following') {
      // Example: Sort by a 'followingScore' field, assuming it exists
      filtered = filtered.sort((a, b) => b.followingScore - a.followingScore);
    } else {
      // Default sorting (e.g., by views if none of the above)
      filtered = filtered.sort((a, b) => b.views - a.views);
    }
    setFilteredDesigns(filtered);
  }, [category, sortOrder, searchTerm, searchColor]);

  const handleLoadMore = () => {
    setVisibleDesigns((prevVisible) => prevVisible + 8); // Increment by 6 designs
  };

  return (
    <section className="design-gallery">
      <div className="design-grid">
        {filteredDesigns.slice(0, visibleDesigns).map((design) => (
          <DesignCard
            key={design.id}
            id={design.id}
            image={design.imageUrl}
            title={design.title}
            author={design.author}
            likes={design.likes}
            views={design.views}
            color={design.color}
          
          />
        ))}
      </div>
      <Footer handleLoadMore={handleLoadMore} />
    </section>
  );
};

export default DesignGallery;