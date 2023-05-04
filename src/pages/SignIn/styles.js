import styled from "styled-components"
import media from "../../styles/media"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export const Container = styled.div`
  height: 100%;
  display: flex;

  align-items: stretch;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 15.6rem auto;

  .email {    
    margin-top: 7.3rem;    
  } 
  
  .password {
    margin-top: 3.2rem;
  }
  
  .labels {
    display: flex;
    margin-bottom: .8rem;
    font-size: 1.6rem;
  }

  ${media.small`
    font-size: 1.4rem;    
  `};
  ${media.medium`    
    font-size: 1.4rem;
  `};
  ${media.large`    
    font-size: 1.6rem;
  `};
  ${media.exlarge`    
    font-size: 1.8rem;
  `};
`

export const ButtoSigIn = styled(Button)`
  margin-top: 3.2rem;  
`

export const ButtoTextSigIn = styled(ButtonText)`
  margin-top: 3.2rem;  
`