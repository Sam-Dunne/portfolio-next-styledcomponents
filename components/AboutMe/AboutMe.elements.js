import styled from 'styled-components';
import { device } from '../../device';

export const ArticleWrapper = styled.article`

  @media ${device.tablet} {
     padding: 2em 6em 0 6em;
    }
    @media ${device.laptopL} {
    padding: 0;     
    width: 540px;
    margin: 0 auto;
    }
`;

export const PARA = styled.p`

  @media ${device.tablet} {
    }

    @media ${device.laptopL} {
    font-size: 1.1em;
    }
`;