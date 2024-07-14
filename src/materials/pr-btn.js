import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      style={{
        padding: '10px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        border: 'none',
        width: '50vw',
        background: '#32cd32',
        borderRadius: '25px',
        color: 'white',
        fontSize:'23px',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrimaryButton;
