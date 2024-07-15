import React from 'react';
import Icon from '../assets/icons/icon';
import '../assets/styles/navigation.css'

const Navigation = ({onPageChange}) => {


  return (
    <nav className="navigation">
      <div className="nav-link" onClick={() => onPageChange('home')}>
        <Icon name='home' size={27} fill='white' />
      </div>
      <div className="nav-link" onClick={() => onPageChange('challenges')}>
        <Icon name='challenges' size={27} fill='white'/>
      </div>
      <div className="nav-link" onClick={() => onPageChange('profile')}>
        <Icon name='user' size={27} fill='white'/>
      </div>
      <div className="nav-link" onClick={() => onPageChange('news')}>
        <Icon name='news' size={27} fill='white'/>
      </div>
    </nav>
  );
}

export default Navigation;
