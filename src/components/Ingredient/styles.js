import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  background-color: ${({ theme }) => theme.COLORS.DARK['900']};
  border-radius: 10px;
  display: inline;
  
`;

export const Content = styled.div`
  height: 36px;

  padding: 0.5rem;
  border-radius: 0.5rem;

  display: inline;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT['600']};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT['500'] : theme.COLORS.LIGHT['100']};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT['500']}` : "none"};

  margin-bottom: 0.5rem;

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    font-size: 0.9rem;
    max-width: 110px;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT['500'] : theme.COLORS.LIGHT['100']};
    }
  }

  > button {
    
    background: none;
    border: none;
    
    > svg {
      width: 100%;
      height: 100%;
      color: ${({ theme, isNew }) => !isNew ? `${theme.COLORS.LIGHT['100']}` : `${theme.COLORS.LIGHT['500']}`};
      
      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT['100']};
      }
    }
  }
`