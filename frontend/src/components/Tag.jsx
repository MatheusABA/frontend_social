import React from 'react';
import '../style.css'; // Ajuste o caminho conforme a estrutura do seu projeto
import tagIcon from '../images/V-Ray.png';

const Tag = ({ label, onDelete }) => {
  return (
    <div className="tag">
      <img src={tagIcon} alt="Tag Icon" className="tag-icon" />
      <span className="tag-label">{label}</span>
      <button className="tag-delete-button" onClick={onDelete}>X</button>
    </div>
  );
};

export default Tag;