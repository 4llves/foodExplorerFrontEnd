import styled from "styled-components"
import media from "../../styles/media"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;  
  justify-content: center;
  flex-direction: column;

  .head {
    display: flex;    

    background: ${({ theme }) => theme.COLORS.GRADIENT['200']};
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};
    width: 80vw;
    height: 29vh;
    
    /* margin: 4.4rem 1.6rem 6.2rem 3.6rem;     */
    margin: 4.4rem auto;

    img {
      display: block;
      position: relative;

      width: 19.1rem;      
      height: 14.9rem;

      opacity: 0.8;

      top: -30px;
      left: -30px;      
    }

    .text {      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: initial;

      font-family: ${({ theme }) => theme.FONTS.TEXT};
      position: relative;
      right: 2.7rem;
      
      h1 {        
        font-size: 1.7rem;
        margin-bottom: 8px;        
      }

      p {
        font-size: 1.1rem;
        line-height: 140%;        
      }
    }    
  }

  .cards {    
    width: 100vw;
    display: flex;

    overflow-x: scroll;    
  }

  ${media.small`
  `};
  ${media.medium`   

    .head {      
      height: 35vh;

      img {
        width: 22.6rem;
        height: 17.5rem;
      }
    }
  `};
  ${media.large`
    .head {      
      height: 24rem;

      img {
        width: 31.1rem;
        height: 26.9rem;
      }
    }
  `};
  ${media.exlarge`
    .head {
      
      img {
        width: 63.2rem;
        height: 40.6rem;

        top: -138px;
        
      }
    }
  `};
`

export const ButtoSigIn = styled(Button)`  
`

export const ButtoTextSigIn = styled(ButtonText)`  
`