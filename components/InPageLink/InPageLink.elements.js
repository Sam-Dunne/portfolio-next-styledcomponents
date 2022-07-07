import styled from 'styled-components';
import {device} from '../../device';

export const CustomLink = styled.a`
    background-color: #8c1aff;
    text-align: center;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 3px 3px px 0px rgba(0,0,0,0.75);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    color: #fafafa;
    transition:
        background-color 200ms ease-in,
        transform 200ms ease-in;
    
    @media ${device.laptopL} {
        font-size: 1rem;
    }
    
    &:hover {
        transform: scale(1.06);
        background-color: #26AD18;
    }

    &:active {
        transform: scale(0.8);
        background-color: green;
    }
    `;