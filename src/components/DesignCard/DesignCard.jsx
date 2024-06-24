
import React, { useState } from 'react';
import './DesignCard.css';
import { FaHeart, FaRegHeart, FaEye, FaSave, FaRegSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DesignCard = ({ id, image, title, author, likes, views }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="design-card">
      <Link to={`/image/${id}`} className="design-link">
        <div className="card-image">
          <img src={image} alt={title} />
          <div className="card-actions">
            <button className="action-btn" onClick={(e) => { e.preventDefault(); toggleSave(); }}>
              {saved ? <FaSave color="#007bff" /> : <FaRegSave />}
            </button>
            <button className="action-btn" onClick={(e) => { e.preventDefault(); toggleLike(); }}>
              {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          </div>
        </div>
        <div className="card-details">
          <h3>{title}</h3>
          <p>{author}</p>
        
          <div className="card-stats">
            <div className="stat">
              <FaHeart className="stat-icon" /> {likes}
            </div>
            <div className="stat">
              <FaEye className="stat-icon" /> {views}
        
            </div>
          </div>
        
        </div>
      </Link>
    </div>
  );
};

export default DesignCard;
