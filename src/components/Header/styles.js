import styled from "styled-components"
import media from "../../styles/media"
import { Button } from "../Button"
import { Input } from "../Input"

export const Container = styled.header`
  /* grid-area: header; */
  width: 100%;
  height: 10.4rem; 

  display: flex;    
  align-items: center;
  justify-content: space-around;

  background: ${({ theme }) => theme.COLORS.DARK['700']};

  .menu-amburguer {
    svg {
      font-size: 2.4rem;
    }
  }

  .receipt-mobile {
    position: relative;

    svg {
      font-size: 2.4rem;
    }

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

  .logout {
    display: none;
  }

  ${media.small`
  `};
  ${media.medium`    
  `};
  ${media.large`    
    justify-content: center;
    align-items: center;    
    gap: 3.2rem;

    .logo {
      h1 {
        font-size: 2.4rem;
      }      

      img {
        width: 3rem;
      }
    }

    .logout {
      display: flex;

      svg {
        font-size: 2.2rem;
      }
    }

    .menu-amburguer,
    .receipt-mobile {
      display: none;
    }
  `};
  ${media.exlarge`    
  `};
`

export const ButtonHeader = styled(Button)`
  display: none;
  
  ${media.large`
    display: flex;
    width: 21.6rem;
    height: 5.6rem;    
  `};
`

export const Search = styled.div`  
  display: none;

  ${media.large`
    display: flex;
    width: 20vw;        
  `};
  ${media.exlarge`
    width: 58.1rem;    
  `};
`