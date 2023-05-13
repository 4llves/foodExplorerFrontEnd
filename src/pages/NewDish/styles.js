import styled from "styled-components"
import media from "../../styles/media"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  flex: 1;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;    
  }
  
  ${media.exlarge`
  `};
`

export const Form = styled.form`
  display: flex;  
  flex-direction: column;
  width: 100%;
  margin: 2rem auto 0;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    
    font-size: 1.6rem;
    line-height: 100%;
    
    cursor: pointer;
    
    gap: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};
  }

  header {
    display: flex;
    align-items: start;    

    :first-child {
      display: flex;
      flex-direction: column;      
      font-size: 1.4rem;
      margin: 2rem 0 1.6rem 0;
      font-family: ${({ theme }) => theme.FONTS.TEXT};      
    }
  }

  .image {    
    cursor: pointer;

    input::-webkit-file-upload-button,
    input::file-selector-button {
      display: none;
    }

    input[type='file'] {
      opacity: 0;
      cursor: pointer;
    }

    input {
      color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    } 

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    }

    
  }
`

export const ButtonTextViewDish = styled(ButtonText)`
  margin: 2rem 0 3.2rem 0;
  font-size: 1.6rem;

  ${media.exlarge`
  `};
`

export const ButtonPageNewDish = styled(Button)`  
  margin: 2rem 0 5.3rem;

  width: 100%;

  ${media.exlarge`
  `};
`