import styled from "styled-components"

export const HomeContainer = styled.div`
  max-width: 1080px;
  padding: 0 30px;
  margin: 50px auto;  
  
  display: grid;
  align-items: center;
  justify-content: center;
  
  gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
