import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { StyledContainer, StyledHeader } from './styles';

export function Header (){
  return(
    <StyledHeader>
      <StyledContainer>
        <div>
          <p>
            <strong>Meu carrinho</strong>
            <span>
              2 itens
            </span>
          </p>
          <Link to='/cart'>
            <MdShoppingCart size={40} color="#fff" />
          </Link>
        </div>
      </StyledContainer>
    </StyledHeader>
  )
}