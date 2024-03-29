import Image from 'next/image';
import { device } from '../../device';
import styled from 'styled-components';
import { GiHamburger } from 'react-icons/gi';
import { FaTimesCircle } from 'react-icons/fa';



export const NavContainer = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    min-height: 10vh;
    padding: 0px 30px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: #6600CC; */
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);

    /* margin-bottom: -4px; */

    @media ${device.mobileL} {
    }

    @media ${device.laptopL} {
    }
`;

export const NavLink = styled.a`
    text-decoration: none;
    padding: 0 0;
    margin: ${props => props.mobile ? '0 0 50px 0' : '0'};
    color: #fafafa;
    font-size: 1.5em;
    font-weight: 500;

    @media ${device.tablet} {  
      padding: 0 20px;   
      font-size: 2.3em;
    }
    
    @media ${device.laptop} {  
      padding: 0 20px;   
      font-size: 1.3em;
    }

    &:hover{
        text-decoration: underline;
        text-decoration-color: #fafafa;
    }
`;

export const NonHomeViewLinks = styled.div`
    display: none;

    @media ${device.laptop} {  
      display: block;  
    }
`;

export const MobileBurger = styled.button`
    /* color: #fafafa; */
    background-color: transparent;
    font-size: 2rem;
    height: fit-content;
    width: fit-content;    
    border: none;  
    cursor: pointer;
      
    @media ${device.mobileL} {
        font-size: 2.3rem;
    }

    @media ${device.laptop}{
        display: none;
    }
`;

export const StyledSvg = styled.svg`
    width: 100%;
    height: 40px; 
`;

export const HamburgerIcon = styled(GiHamburger)`
    color: white;
`
export const XNavIcon = styled(FaTimesCircle)`
    color: white;
`

//mobile nav elements
export const MobileMenuContainer = styled.div`
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
export const Icon = styled(Image)`
 
    @media ${device.mobileL} {
        
    }
`;


export const MobileNavBurgerWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

export const MobileNavLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px 0 0 0;
`;