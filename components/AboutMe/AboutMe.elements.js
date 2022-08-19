import styled from 'styled-components';
import { device } from '../../device';

export const ArticleWrapper = styled.article`
   opacity: ${props => props.isVisible ? '1' : '0'};
    transition:
     opacity 600ms ease-in 150ms;
  @media ${device.tablet} {
     padding: 2em 6em 0 6em;
    }
    @media ${device.laptopL} {
    padding: 0;     
    width: 540px;
    margin: 0 auto;
    }
`;

