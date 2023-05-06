import styled from "styled-components"
import media from "../../styles/media"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;  
  flex-direction: column;
  justify-content: center;

  .card {
    display: flex;    

    background: ${({ theme }) => theme.COLORS.GRADIENT['200']};
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};
    width: 37.6rem;
    height: 12rem;
    
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    /* padding: 3.6rem .8rem 2.2rem 15.3rem; */

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

  ${media.small`
  `};
  ${media.medium`
  `};
  ${media.large`    
  `};
  ${media.exlarge`    
  `};
`

export const ButtoSigIn = styled(Button)`  
`

export const ButtoTextSigIn = styled(ButtonText)`  
`