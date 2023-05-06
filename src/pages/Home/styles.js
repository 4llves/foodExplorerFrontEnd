import styled from "styled-components"
import media from "../../styles/media"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;  
  flex-direction: column;
  justify-content: center;  

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