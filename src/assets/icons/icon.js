import React from 'react';
import PropTypes from 'prop-types';

// Import your SVG files
import { ReactComponent as Home } from './home.svg';
import { ReactComponent as List } from './list.svg';
import { ReactComponent as User } from './user.svg';
import { ReactComponent as Lightning } from './lightning.svg';

const icons = {
    home: Home,
    news: List,
    user: User,
    challenges: Lightning,
};

const Icon = ({ name, onClick, fill, size, children, ...rest }) => {
  const IconComponent = icons[name];
  
  if (!IconComponent) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const containerStyle = {
    position: 'relative', 
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    width: size || '22px',
    height: size || '22px',
  };

  const iconStyle = {
    width: '100%',
    height: '100%',
    fill: fill || 'var(--txtc)',
    filter: children ? 'blur(.4px)' : 'none',

  };
  
  const childrenStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    fontSize: '.6rem',
  };
  

  return (
    <div style={containerStyle}>
      <IconComponent
        className='icon'
        {...rest}
        onClick={handleClick}
        style={iconStyle}
      />
      {children && <div style={childrenStyle}>{children}</div>}
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  fill: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node, // Children prop for text or other elements
};

Icon.defaultProps = {
  fill: 'var(--txtc)',
  size: '22px',
};

export default Icon;