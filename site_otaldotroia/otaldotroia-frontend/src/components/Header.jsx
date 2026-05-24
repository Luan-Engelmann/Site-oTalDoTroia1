import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const FixedHeader = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: rgba(18, 18, 23, 0.95);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
        height: 50px; 
        border-radius: 50%;
        object-fit: cover;
    }
`;

const NavMenu = styled.nav`
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        
        @media (max-width: 768px) {
            display: ${props => (props.open ? 'flex' : 'none')};
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: #121217;
            width: 100%;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
    }
    
    li {
        margin-left: 30px;
        @media (max-width: 768px) {
            margin: 15px 0;
            text-align: center;
        }
    }

    .nav-link {
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        font-size: 1rem;
        position: relative;
        transition: 0.3s;
        &:hover { color: #00CCFF; }
        &::after {
            content: '';
            position: absolute;
            bottom: -5px; left: 0; width: 0; height: 2px;
            background-color: #00CCFF; transition: 0.3s;
        }
        &:hover::after { width: 100%; }
    }
`;

const MobileToggle = styled.button`
    display: none;
    background: none;
    border: none;
    color: #00CCFF;
    font-size: 1.5rem;
    cursor: pointer;
    @media (max-width: 768px) { display: block; }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <FixedHeader>
            <Logo>
                <Link to="/" onClick={handleLinkClick}>
                    <img src="/logo_troia.jpeg" alt="Logo" />
                </Link>
            </Logo>
      
            <NavMenu open={menuOpen}>
                <ul>
                    <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Início</Link></li>
                    <li><Link to="/sobre" className="nav-link" onClick={handleLinkClick}>Sobre</Link></li>
                    <li><Link to="/conteudo" className="nav-link" onClick={handleLinkClick}>Conteudo</Link></li>
                    <li><Link to="/parceiros" className="nav-link" onClick={handleLinkClick}>Parceiros</Link></li>
                    <li><Link to="/blog" className="nav-link" onClick={handleLinkClick}>Blog</Link></li> {/* <-- NOVO ITEM */}
                </ul>
            </NavMenu>

            <MobileToggle onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </MobileToggle>
        </FixedHeader>
    );
};

export default Header;