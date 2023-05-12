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
  
  ${media.exlarge`
  `};
`

export const Form = styled.form`
  width: 100%;
  margin: 2rem auto 0;

  header {    
    :first-child {
      font-size: 1.4rem;
      margin: 2rem auto 3rem;
      font-family: ${({ theme }) => theme.FONTS.TEXT};      
    }
  }

  .image {
    input::-webkit-file-upload-button,
    input::file-selector-button {
      display: none;
    }

    input[type='file'] {
      opacity: 0;
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
  margin-top: 2rem;

  ${media.exlarge`
  `};
`