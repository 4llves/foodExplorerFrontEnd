import styled from "styled-components";


export const Container = styled.span`
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  font-weight: 500;
  line-height: 2.4rem;

  padding: .4rem .8rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK['1000']};
  
  display: flex;  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 3.2rem;  
  gap: .8rem;
`