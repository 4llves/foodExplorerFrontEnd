import styled from "styled-components";
import media from "../../styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  gap: 1.2rem;
  isolation: isolate;

  width: 210px;
  height: 292px;

  background: ${({ theme }) => theme.COLORS.DARK['200']};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK['300']};
  border-radius: 8px;
  

  ${media.small`
  `};
  ${media.medium`
  `};
  ${media.large`
  `};
  ${media.exlarge`
  `};
`