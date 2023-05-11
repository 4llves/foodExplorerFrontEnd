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
    height: 100vh;
  }
  
  ${media.exlarge`    
  `};
`

export const ButtonTextViewDish = styled(ButtonText)`  
  ${media.exlarge`
  `};
`

export const ButtonPageViewDish = styled(Button)`
  ${media.exlarge`    
  `};
`