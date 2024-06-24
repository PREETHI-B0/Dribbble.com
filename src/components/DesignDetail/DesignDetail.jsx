// src/components/DesignDetail/DesignDetail.jsx
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './DesignDetail.css'; // Create this CSS file for styling

const DesignDetail = ({ designs }) => {
  const history = useHistory();
  const { id } = useParams();
  const design = designs.find(d => d.id === id);

  if (!design) {
    // Redirect to home or show a message if design is not found
    history.push('/');
    return null;
  }

  const { image, title, } = design;

  return (
    <div className="design-detail">
      <div className="modal-overlay" onClick={() => history.push('/')}>
        <div className="modal">
          <img src={image} alt={title} />
          <div className="modal-content">
            <h2>{title}</h2>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDetail;
