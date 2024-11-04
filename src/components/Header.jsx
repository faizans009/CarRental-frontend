import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import profileImg from '../assets/img/Profill.png'; 
import profileIcon from '../assets/icons/Profile.svg'; 
import favIcon from '../assets/icons/fav.svg'; 
import historyIcon from '../assets/icons/history.svg'; 
import logoutIcon from '../assets/icons/Exit.svg'; 
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

`;

const Logo = styled.img`
  width: 150px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; 
  
  a {
    color: black;
    text-decoration: none;
    margin: 0 20px;
    font-size: 1.2rem;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }

  .active {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #007bff;
      bottom: -5px;
      left: 0;
    }
  }
`;

const ProfileImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 70px; 
  right: 5rem;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #f0f0f0;
  }
  .icon{
    width: 15px;
    height: 15px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    border: none;
    background: none;
    font-size: 1rem;
    cursor: pointer;
    color: black;
  }
`;


const Username = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const Header = () => {
    const [dropdownOpen,setDropDownOpen] = useState(false);
    const toggleDropdown = ()=>{
        setDropDownOpen(!dropdownOpen);
  
    }
    
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      
      <NavLinks>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/vehicle-listing" activeClassName="active">Vehicle Listing</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
      </NavLinks>
      
      <ProfileImg src={profileImg} alt="Profile"  onClick={toggleDropdown} />

      <DropdownMenu isOpen={dropdownOpen}>
        <DropdownItem>
          <img src={profileImg} alt="Profile" />
          <Username>John Doe</Username>
        </DropdownItem>
        <DropdownItem>
            <img className='icon' src={profileIcon} alt="" />
          <NavLink to="/profile">Profile</NavLink>
        </DropdownItem>
        <DropdownItem>
        <img className='icon' src={favIcon} alt="" />
          <NavLink to="/favorites">Favorites</NavLink>
        </DropdownItem>
        <DropdownItem>
        <img className='icon' src={historyIcon} alt="" />
          <NavLink to="/order-history">History</NavLink>
        </DropdownItem>
        <DropdownItem>
        <img className='icon' src={logoutIcon} alt="" />
          <button onClick={() => console.log('Logout clicked')}>Logout</button>
        </DropdownItem>
      </DropdownMenu>
    </HeaderContainer>
  );
};

export default Header;
