import styled from "styled-components"
import media from "../../styles/media"

export const Container = styled.header`
  /* grid-area: header; */
  width: 100%;  
  padding: 5.6rem 2.8rem 2.4rem;

  background: ${({ theme }) => theme.COLORS.DARK['700']};
  display: flex;  
  justify-content: space-between;

  svg {
    font-size: 2.4rem;
  }

  div {
    position: relative;    
     
    span {
      width: 20px;
      height: 20px;

      background: ${({ theme }) => theme.COLORS.TOMATO['100']};

      display: flex;
      align-items: center;
      text-align: center;      
      justify-content: center;      

      position: absolute;
      top: -8px;
      right: -8px;
      font-size: 1.4rem;
      border-radius: 99px;      
    }
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h1 {
      font-size: 2rem;
    }

    gap: 1.0rem;

    img {
      width: 2.4rem;
    }
  }


  ${media.small`
  `};
  ${media.medium`    
  `};
  ${media.large`    
  `};
  ${media.exlarge`    
  `};
`

