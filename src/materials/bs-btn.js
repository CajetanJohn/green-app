import React from 'react';
import PropTypes from 'prop-types';

const BasicButton = ({ onClick, children }) => {
  return (
    <button
      style={{
        padding: '10px 15px',
        margin:'20px 0px',
        textAlign: 'center',
        cursor: 'pointer',
        border: 'none',
        width: 'fit-content',
        background: 'lightgrey',
        borderRadius: '3px',
        color: 'black',
        border:'1px solid black',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

BasicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicButton;
