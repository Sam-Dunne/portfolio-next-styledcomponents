import styled from 'styled-components';
import Link from 'next/link';
import { GiHamburger } from 'react-icons/gi'
import { device } from '../device';

const NavContainer = styled.nav`
    height: 90px;
    padding: 10px 10px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #6600CC;
    margin-bottom: -4px;

    @media ${device.laptopL} {
        padding: 10px 90px 0 90px;
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    padding: 0 50px;
    color: #fafafa;
    font-size: 1.5rem;
    font-weight: 500;

    @media ${device.tablet} {  
      padding: 0 40px;   
    }

    &:hover{
        text-decoration: underline;
        text-decoration-color: #fafafa;
    }
`;

const NonHomeViewLinks = styled.div`
    display: none;

    @media ${device.tablet} {  
      display: block;  
    }
`;

const MobileBurger = styled.div`
    color: #fafafa;
    font-size: 2rem;
    margin-right: 50px;
    height: 30px;

    @media ${device.tablet}{
        display: none;
    }
`;

const StyledSvg = styled.svg`
    width: 100%;
    height: 40px; 
`;

const Navbar = () => {
    return (
        <>
            <NavContainer>
                <Link href='/' passHref>
                    <NavLink>Home</NavLink>
                </Link>
                <MobileBurger><GiHamburger></GiHamburger></MobileBurger>
                <NonHomeViewLinks>
                    <Link href='/about' passHref>
                        <NavLink>About</NavLink>
                    </Link>
                    <Link href='/projects' passHref>
                        <NavLink>Projects</NavLink>
                    </Link>
                    <Link href='/' passHref>
                        <NavLink>Contact</NavLink>
                    </Link>
                </NonHomeViewLinks>
            </NavContainer>
            <StyledSvg>
                <ellipse cx="50%" cy="-5" rx="52%" ry="40" fill="#6600CC"></ellipse>
            </StyledSvg>
        </>
    )
}

export default Navbar
