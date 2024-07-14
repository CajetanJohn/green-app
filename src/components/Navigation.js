import React from 'react';
import Icon from '../assets/icons/icon';
import '../assets/styles/navigation.css'

const Navigation = ({onPageChange}) => {


  return (
    <nav className="navigation">
      <div className="nav-link" onClick={() => onPageChange('home')}>
        <Icon name='home' size={24} />
      </div>
      <div className="nav-link" onClick={() => onPageChange('challenges')}>
        <Icon name='challenges' size={24} />
      </div>
      <div className="nav-link" onClick={() => onPageChange('profile')}>
        <Icon name='user' size={24} />
      </div>
      <div className="nav-link" onClick={() => onPageChange('news')}>
        <Icon name='news' size={24} />
      </div>
    </nav>
  );
}

export default Navigation;
