import styled from "styled-components"
import media from "../../styles/media"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;  
  justify-content: center;
  flex-direction: column;

  main {    
    padding: 1.6rem 5.6rem 3.3rem;
  }

  img {
    display: block;
    position: relative;
    width: 26.5rem;
    margin-inline: auto;
  }

  section {
    margin-top: 1.6rem;    
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-family: ${({ theme }) => theme.COLORS.LIGHT['300']};
    
    h1 {
      font-weight: 500;
      font-size: 2.7rem;
      text-align: center;
    }

    h3 {
      margin-top: 2.4rem;
      font-size: 1.6rem;
      line-height: 140%;
      font-weight: 400;
      text-align: justify;
    }

    .ingredients {
      margin: 2.4rem auto 4.8rem;
      display: flex;  
      gap: 2.4rem;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      

      .amount {        
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.2rem;
        flex-direction: row;
        gap: 1.9rem;

        svg {          
          font-size: 3rem;
        }
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

export const ButtonTextViewDish = styled(ButtonText)`
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
`

export const ButtonPageViewDish = styled(Button)`
  width: 18.8rem;

  font-size: 1rem;

  svg {
    font-size: 1.7rem;
  }
`