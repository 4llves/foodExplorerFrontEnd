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

  h3 {
    display: none;
  }

  margin: 15.6rem auto;

  .name {    
    margin-top: 7.3rem;    
  } 
  
  .password, .email {
    margin-top: 3.2rem;
  }
  
  .labels {
    display: flex;
    margin-bottom: .8rem;
    font-size: 1.6rem;
  }

  ${media.small && media.medium`
    font-size: 1.4rem;
  `};  
  ${media.large && media.exlarge`
    background: ${({ theme }) => theme.COLORS.DARK['700']};
    padding: 6.4rem;
    
    width: 47.6rem;
    margin-top: 9rem;

    h3 {
      display: flex;
    }

  `};  
`

export const ButtoSigIn = styled(Button)`
  margin-top: 3.2rem;  
`

export const ButtoTextSigIn = styled(ButtonText)`
  margin-top: 3.2rem;  
`