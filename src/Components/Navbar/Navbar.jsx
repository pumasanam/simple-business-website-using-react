import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const ChangeIcon =()=>{
    setIcon(!icon);
  };
  return (
    <>
      <nav>
        <div className="navbar">
            <Link className='title' to="/">Business Website</Link>

            <div className="nav_ul">
                <ul className={icon ? 'main_ul active':'main_ul'}>
                    <li><Link className='nav_link' to="/">Home</Link></li>
                    <li><Link className='nav_link' to="/service">Service</Link></li>
                    <li><Link className='nav_link' to="/about">About</Link></li>
                    <li><Link className='nav_link' to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="icons" onClick={ChangeIcon}>
              {icon ? <CancelIcon style={{color:'white',cursor:'pointer'}}/> : <MenuIcon style={{color:'white',cursor:'pointer'}}/>}
                  
                  
            </div>

        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
