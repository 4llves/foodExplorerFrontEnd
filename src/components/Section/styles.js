import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};
    
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
    margin: 2.4rem 0;
  }

`