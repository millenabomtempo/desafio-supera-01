import styled from 'styled-components'

export const CartContainer = styled.div`
  max-width: 1080px;
  margin: 50px auto;
  padding: 0 20px;  

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #12664F;
    
    svg {
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 30px;    
  }
`

export const CartList = styled.ul`
  height: 100%;
  padding: 15px;
  margin: 50px auto;
  list-style: none;
  border-radius: 8px;
  background-color: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  
`

export const CartListItem = styled.li`
  min-height: 100px;
  padding: 6px 0;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.20) 0px 1px 4px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > div {    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      padding-right: 20px;
      flex-direction: row ;
    }
    
  }

  & + li {
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row ;
  }
  
`

export const CartListItemGameInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 80px;
  }

`

export const CartListItemQuantity = styled.div`
  display: flex;
  align-items: center;

  button, input {
    font-weight: 700;
    background-color: #fff;
    padding: 0 5px;
  }
  
  button {
    font-size: 28px;
    border: 0;
    color: #12664F;

    &:disabled {
      cursor: not-allowed;
      color: #eee;
    }
  }

  input {
    max-width: 50px;
    margin: 10px 10px;
    padding: 5px;
    border: 1px solid #307473;
    font-size: 20px;
    text-align: center;

    @media screen and (min-width: 768px) {
      margin: 0 10px;
    }
  }
`

export const CartListItemSubtotal = styled.div`  
  font-size: 24px;
  font-weight: 700;  

  display: flex;
  align-items: center;  

  button {
    border: 0;
    color: #12664F;
    background-color: #fff;
    margin-left: 10px;

    display: flex;
    align-items: center;
  }


  @media screen and (min-width: 768px) {
    min-width: 200px;
    justify-content: end;
  }

  @media screen and (min-width: 1024px) {
    min-width: 250px;
  }
`

export const CartTotal = styled.div`
  margin-top: 15px;
  margin-right: 10px;
  text-align: end;
  
  strong {
    font-size: 28px;  
  }

  span {
    font-size: 20px;
    color: #12664F;
    margin-right: 10px;
  }
  
`