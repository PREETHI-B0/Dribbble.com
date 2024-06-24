import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ImageDetails.css';
import image from '../../assets/image/image.png';


const ImageDetails = ({ designs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const design = designs.find((design) => design.id === parseInt(id));

  if (!design) {
    return <div>Design not found</div>;
  }

  const { title, author, description ,imageUrl} = design;

  return (
    <div className="image-details" onClick={() => navigate(-1)}>
      <div className="overlay" />
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="details">
          <h2>{title}</h2>
          <div className="image">
          <img src={image} alt="image" />
        </div>
          <p>Author: {author}</p>
          <p>Description: {description}</p>
        </div>
      </div>
  
    </div>
  );
};

export default ImageDetails;
