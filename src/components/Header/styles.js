import styled from "styled-components"
import media from "../../styles/media"
import { Button } from "../Button"

export const Container = styled.header`
  /* grid-area: header; */
  width: 100%;
  height: 10.4rem;
  display: flex;  
  align-items: center;  
  justify-content: space-around;
  
  background: ${({ theme }) => theme.COLORS.DARK['700']};

  .menu-hamburguer {        
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

  .wrapper-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;    

    span {
      margin-top: 0.2rem; // tava dando agonia em ver ele um pouco pra cima mesmo centralizado
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.CAKE['200']};
    }

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      
      h1 {
        font-size: 2rem;
      }

      gap: 1.0rem;

      img {
        width: 2.4rem;
      }
    }

  }

  

  .logout {
    display: none;
    cursor: pointer;
  }

  ${media.small`
  `};
  ${media.medium`    
  `};
  ${media.large`
    display: flex;
    justify-content: center;
    align-items: center;    
    gap: 3.2rem;

    .wrapper-logo {
      flex-direction: column;      
      align-items: end;
      gap: 0;
                       
      .logo {
        h1 {
          font-size: 2.4rem;
        }      

        img {
          width: 3rem;
        }
      }
    }

    

    .logout {
      display: flex;

      svg {
        font-size: 2.2rem;
      }
    }

    .menu-hamburguer,
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


export const MenuOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK["700"]};
  padding: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;

  ${media.large`
    display: none;        
  `};
  ${media.exlarge`
    display: none;       
  `};  
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.CAKE["200"]};
  cursor: pointer;

  svg {
    font-size: 1.6rem;
    margin-right: 5px;
  }
  
  ${media.large`
    display: none;        
  `};
  ${media.exlarge`
    display: none;       
  `};  
`;

export const SectionHeader = styled.section`
    position: fixed;
    flex-direction: column;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 5;
    display: flex;
    align-items: start;
    justify-content: start;    
    padding: 3.6rem 2.8rem;

    .links {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-bottom: 1rem;
      

      a {
        &:nth-child(2) {
          margin: 4.6rem 0 2rem;
        }
      
        border-bottom: solid 1px ${({ theme }) => theme.COLORS.DARK["1000"]};
        color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
        text-decoration: none;
        font-size: 2.4rem;
        font-weight: 300;
        line-height: 3.3rem;
        word-wrap: break-word;        
      }

      
    }
  

   background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.COLORS.DARK['700']} 20%,
    ${({ theme }) => theme.COLORS.DARK['400']} 20%
  );
  
  .menu-name {
    display: flex;    
    align-items: center;
    gap: 1rem;
    font-size: 2.1rem;
    margin: 1rem 0 6.5rem;
    /* position: absolute;
    top: 4rem;
    left: 2rem; */

    > svg {
      font-size: 1.8rem;
    }    
  }

  ${media.large`
    display: none;        
  `};
  ${media.exlarge`
    display: none;       
  `};  
`
