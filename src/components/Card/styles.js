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
      color: ${({ theme }) => theme.COLORS.LIGHT['300']};
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

  h3 {
    display: none;
  }

  span {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 1.6rem;
    text-align: center;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE['200']};
  }

  .bottom-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
    bottom: 0;

    .amount {      
      color: ${({ theme }) => theme.COLORS.LIGHT['100']};
      width: 10rem;      
      font-size: 1.6rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        font-size: 1.8rem;
      }
    }
  }  

  ${media.small`
  `};
  ${media.medium`      
  `};
  ${media.large`  
    width: 30.4rem; 
    height: 46.2rem;

    .like {     
      top: 1.6rem;
      left: 26.2rem;
    
      svg {
        font-size: 2.4rem;
      }
    }

    img {
      width: 17.6rem;
    }

    > h1 {    
      font-size: 2.4rem;
    }

    h3 {
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      display: flex;
      line-height: 160%;
      font-size: 1.4rem;
      font-weight: 400;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 4.4rem;
    }

    span {      
      font-size: 3.2rem;
      line-height: 100%;
    }

    .bottom-card {      
      flex-direction: row;
      margin-top: .8rem;
      gap: 1.6rem;      

      .amount {        
        font-size: 2rem;
        font-weight: 700;
        gap: 1.4rem;

        svg {          
          font-size: 3rem;
        }
      }
    }  
  `};
  ${media.exlarge`
  `};
`

export const ButtonCard = styled(Button)`
  width: 16.2rem;
  height: 3.2rem;

  margin-top: .4rem;

  ${media.medium`
    width: 9.2rem;
    height: 4.8rem;      
  `};
`