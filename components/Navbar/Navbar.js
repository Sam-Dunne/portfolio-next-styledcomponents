import React, { useState } from 'react';
import { GiHamburger } from 'react-icons/gi';
import { FaTimesCircle } from 'react-icons/fa';
import { NavContainer, NavLink, NonHomeViewLinks, MobileBurger, HamburgerIcon, XNavIcon, MobileMenuContainer, MobileNavBurgerWrapper, MobileNavLinkWrapper } from './Navbar.elements';
import DownloadPDFLink from '../DownloadPDFLink/DownloadPDFLink';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = ({ isOpen, mobile }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (e) => {
        e.preventDefault()
        setMenuOpen(!menuOpen)};

    return (
        <>
            {menuOpen ?
                <>
                    {/* Mobile menu is Open */}
                    <MobileMenuContainer isOpen>
                        <MobileNavBurgerWrapper>
                            <MobileBurger onClick={handleNavClick}>
                                <XNavIcon />
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
                            <DownloadPDFLink textWhite></DownloadPDFLink>
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
                    {/* <StyledSvg>
                        <ellipse cx="50%" cy="-5" rx="52%" ry="40" fill="#6600CC"></ellipse>
                    </StyledSvg> */}
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
                        <MobileBurger onClick={handleNavClick} ><HamburgerIcon ></HamburgerIcon></MobileBurger>
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
                    {/* <StyledSvg>
                        <ellipse cx="50%" cy="-5" rx="52%" ry="40" fill="#6600CC"></ellipse>
                    </StyledSvg> */}
                </>
            }
        </>
    )
}

export default Navbar
