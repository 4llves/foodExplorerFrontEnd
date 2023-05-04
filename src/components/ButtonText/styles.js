import styled from "styled-components";
import media from "../../styles/media";

export const Container = styled.button`   
  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  background: none;

  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  gap: .8rem;  
    
  border: 0;
  
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem; 
  text-align: center;


  > svg {
    gap: .8rem;
  }

  ${media.small && media.medium`
    font-size: 1.4rem;
  `};  
  ${media.large && media.exlarge`    
    font-size: 1.4rem;
  `};  
`