import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Netflix_icon from '../../icons/Netflix_logo.svg';
import Avatar_icon from '../../icons/avatar.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  const profile = () => {
    navigate('/profile');
  };

  const home = () => {
    navigate('/homepage');
  };
  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
      <img
        onClick={home}
        className="navbar_logo"
        src={Netflix_icon}
        alt="Netflix-icon"
      />
      <img
        onClick={profile}
        className="navbar_avatar"
        src={Avatar_icon}
        alt="Avatar-icon"
      />
    </div>
  );
};

export default Navbar;