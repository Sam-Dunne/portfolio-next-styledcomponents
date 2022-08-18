import styled from 'styled-components';
import { device } from '../../device';

export const ProjectsSection = styled.section`
    position: relative;
    padding: 0px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;  
    flex-wrap: wrap;
    
    @media ${device.tablet} {
        padding: 0 4em;
    }

    @media ${device.laptopL} {
        padding: 0 15vw;
    }
    `;