import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  width: 31.6rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK['900']};
  color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  
  border-radius: .8rem;
  
  > input {
    width: 31.6rem;
    height: 4.8rem;
    
    padding: 1.2rem 1.7rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT['500']};
    border: 0;

    font-size: 1.6rem;
    font-weight: 400;    
  } 

  > svg {
    margin-left: 1.4rem;
    //padding: 1.2rem 1.7rem;
    //size: 2.4rem;
  }


`