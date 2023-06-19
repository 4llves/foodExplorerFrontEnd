import styled from "styled-components"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import media from "../../styles/media"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  main {
    display: flex;
    width: 100%;
    max-width: 36.4rem;
    flex-direction: column;
    align-items: center;   
  }
  
  ${media.large`
    main {
      max-width: 120rem;
    }
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
    width: 100%;
    
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

  .col-1 {
    .image {
      display: flex;
      cursor: pointer;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.COLORS.DARK['800']};
      color: ${({ theme }) => theme.COLORS.LIGHT['100']};
      align-items: center;
      gap: .8rem;

      span {
        width: 100%;
      }

      input::-webkit-file-upload-button,
      input::file-selector-button {
        display: none;
      }
      
      input[type='file'] {
        opacity: 0;
        cursor: pointer;
        width: 0;
      }
      
      input {
        color: ${({ theme }) => theme.COLORS.LIGHT['100']};
        height: 4.8rem;      
      } 
      
      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT['100']};
        margin-left: 3.2rem;
        width: 3.4rem;
        height: 3.4rem;
      }   
      
    }
    
    select {
      background-color: ${({ theme }) => theme.COLORS.DARK['800']};
      color: ${({ theme }) => theme.COLORS.LIGHT['500']};
      padding: 16px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.6rem;
      
      border: none;
      /* appearance: none; */
      outline:0;
      box-shadow: none;      
    }
  }

  .col-2 {
    h2 {
      display: flex;
      flex-direction: column;
      margin: 2rem 0 1.6rem 0;
      font-weight: normal;

      font-size: 1.6rem;
      line-height: 100%;

      cursor: pointer;

      gap: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT['300']};      
    }
  }

  .ingredients {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: .8rem;
    
    padding: .4rem .8rem;
    gap: 1.6rem;
    
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.COLORS.DARK['800']};      
  }

  ${media.large`
    .col-1 {      
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3.2rem;      

      label:nth-child(1) {
        max-width: 230px;
      }      

      label:nth-child(3) {
        max-width: 364px;
      }      
    }    
  `};
`

export const ButtonTextViewDish = styled(ButtonText)`
  margin: 2rem 0 3.2rem 0;
  font-size: 1.6rem;

  ${media.large`
  `};
`

export const ButtonPageNewDish = styled(Button)`  
  margin: 2rem 0 5.3rem;

  width: 100%;

  ${media.large`
  `};
`