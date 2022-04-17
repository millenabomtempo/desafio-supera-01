import styled from 'styled-components'

export const GameCardContainer = styled.div`
  height: 100%;
  max-width: 250px;
  min-width: 200px;
  padding: 10px;
  border-radius: 8px;
  background-color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`

export const GameCardInfo = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
    
  span {
    background-color: #12664F;
    padding: 2px 4px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-weight: 700;
    color: #edfff0;

    position: absolute;
    right: -0;
    top: 3%;
  }

  strong {
    font-size: 18px;
    padding: 6px;
    text-align: center;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    color: #12664F;
    text-align: right;
    padding: 4px;
  }

`

export const AddToCart = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 8px;
  background-color: #2dc2bd;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 700;
  color: #12664F;

  > span {
    padding-left: 5px;
    transition: color 0.4s;
        
    &:hover {
      color: #edfff0;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 2px;

    span {
      padding: 2px 4px;
    }

    svg {
      margin-right: 4px;
    }

  } 
  
`
