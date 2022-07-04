import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburger } from 'react-icons/gi';
import { FaTimesCircle } from 'react-icons/fa';
import { device } from '../device';
import PDFLink from './PDFLink';

const NavContainer = styled.nav`
    min-height: 10vh;
    padding: 20px 30px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #6600CC;
    margin-bottom: -4px;

    @media ${device.mobileL} {
    }

    @media ${device.laptopL} {
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    padding: 0 0;
    margin: ${props => props.mobile ? '0 0 50px 0' : '0'};
    color: #fafafa;
    font-size: 1.5rem;
    font-weight: 500;

    @media ${device.tablet} {  
      padding: 0 20px;   
      font-size: 2.3rem;
    }
    
    @media ${device.laptop} {  
      padding: 0 20px;   
      font-size: 1.3rem;
    }

    &:hover{
        text-decoration: underline;
        text-decoration-color: #fafafa;
    }
`;

const NonHomeViewLinks = styled.div`
    display: none;

    @media ${device.laptop} {  
      display: block;  
    }
`;

const MobileBurger = styled.a`
    color: #fafafa;
    font-size: 2rem;
    height: 30px;
    width: fit-content;

    @media ${device.mobileL} {
        font-size: 2.3rem;
    }

    @media ${device.laptop}{
        display: none;
    }
`;

const StyledSvg = styled.svg`
    width: 100%;
    height: 40px; 
`;

//mobile nav elements
const MobileMenuContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: #934cdb;
    position: fixed;
    padding: 3rem;
    top: ${props => props.isOpen ? '0' : '-200vh'};
    left: ${props => props.isOpen ? '0' : '-200vw'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    z-index: 9999;

    transition:
       top 500ms ease-out,
       opacity 1000ms ease, 
       left 500ms ease-out;

    @media ${device.mobileL} {
        padding: 5rem;
    }
`;
const Icon = styled(Image)`
 
    @media ${device.mobileL} {
        
    }
`;


const MobileNavBurgerWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

const MobileNavLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px 0 0 0;
`;

const Navbar = ({ isOpen, mobile }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (e) => setMenuOpen(!menuOpen);

    return (
        <>
            {menuOpen ?
                <>
                    {/* Mobile menu is Open */}
                    <MobileMenuContainer isOpen>
                        <MobileNavBurgerWrapper>
                            <MobileBurger href='' onClick={handleNavClick}>
                                <FaTimesCircle />
                            </MobileBurger>
                        </MobileNavBurgerWrapper>
                        <MobileNavLinkWrapper>

                            <Link href='/projects' passHref>
                                <NavLink mobile onClick={handleNavClick}>Projects</NavLink>
                            </Link>
                            <Link href='/cv' passHref>
                                <NavLink mobile onClick={handleNavClick}>CV</NavLink>
                            </Link>
                            <Link href='/contact' passHref>
                                <NavLink mobile onClick={handleNavClick}>Contact</NavLink>
                            </Link>
                            <Link href='/' passHref>
                                <NavLink mobile onClick={handleNavClick}>Home</NavLink>
                            </Link>
                            <PDFLink textWhite></PDFLink>
                        </MobileNavLinkWrapper>
                    </MobileMenuContainer>
                    <NavContainer>
                        <Link href='/' passHref>
                            <NavLink>Sam Dunne</NavLink>
                        </Link>
                        <MobileBurger onClick={handleNavClick}  ><GiHamburger ></GiHamburger></MobileBurger>
                        <NonHomeViewLinks>
                        </NonHomeViewLinks>
                    </NavContainer>
                        <StyledSvg>
                            <ellipse cx="50%" cy="-5" rx="52%" ry="40" fill="#6600CC"></ellipse>
                        </StyledSvg>
                </>
                :
                // Mobile menu is closed
                <>
                    <MobileMenuContainer href='' onClick={handleNavClick}><FaTimesCircle /></MobileMenuContainer>
                    <NavContainer>
                        <Link href='/' passHref>
                            <NavLink>Sam Dunne</NavLink>
                        </Link>
                        {/* Hamburger Icon */}
                        <MobileBurger href='' onClick={handleNavClick} ><GiHamburger ></GiHamburger></MobileBurger>
                        <NonHomeViewLinks>

                            <Link href='/projects' passHref>
                                <NavLink>Projects</NavLink>
                            </Link>
                            <Link href='/cv' passHref>
                                <NavLink>CV</NavLink>
                            </Link>
                            <Link href='/contact' passHref>
                                <NavLink>Contact</NavLink>
                            </Link>
                        </NonHomeViewLinks>
                    </NavContainer>
                    <StyledSvg>
                        <ellipse cx="50%" cy="-5" rx="52%" ry="40" fill="#6600CC"></ellipse>
                    </StyledSvg>
                </>
            }
        </>
    )
}

export default Navbar
