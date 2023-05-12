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

  .image {
    input::-webkit-file-upload-button,
    input::file-selector-button {
      display: none;
    }    
  }
`

export const ButtonTextViewDish = styled(ButtonText)`  
  ${media.exlarge`
  `};
`

export const ButtonPageNewDish = styled(Button)`
  margin-top: 2rem;

  ${media.exlarge`
  `};
`