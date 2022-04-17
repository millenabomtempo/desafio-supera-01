import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: #307473;
  padding: 10px 25px;
  
`

export const StyledContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;  
  display: flex;
  align-items: center;
  justify-content: end;

  div {
    display: flex;
    align-items: center;

    p {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 15px;
      color: #fff;
    }
  }
`
