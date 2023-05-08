import styled from "styled-components";
import media from "../../styles/media";
import { Button } from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 1.2rem;
  isolation: isolate;

  width: 210px;
  height: 292px;

  background: ${({ theme }) => theme.COLORS.DARK['200']};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK['300']};
  border-radius: 8px;    

  .like {
    display: block;    
    position: relative;
    
    width: 100%;
    top: 1.6rem;
    left: 17rem;
  
    svg {
      font-size: 2.4rem;
    }
  }

  img {
    display: block;
    position: relative;
    width: 8.8rem;
    margin: 1.2rem 6.1rem 0 6.1rem;
  }

  > h1 {    
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
  }

  span {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 1.6rem;
    text-align: center;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE['200']};
  }

  .amount {
    width: 10rem;
    font-size: 1.6rem;    

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 1.8rem;
    }
  }

  

  ${media.small`
  `};
  ${media.medium`
      
  `};
  ${media.large`
    width: 30.4rem; 
    height: 46.2rem;    
  `};
  ${media.exlarge`  
    width: 30.4rem;
    height: 46.2rem;  
  `};
`

export const ButtonCard = styled(Button)`
  width: 16.2rem;
  height: 3.2rem;

  margin-top: .4rem;
`