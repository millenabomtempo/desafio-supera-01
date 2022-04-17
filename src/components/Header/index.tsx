import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { StyledContainer, StyledHeader } from './styles';

export function Header (){
  const { cart } = useCart();
  const cartSize = cart.length
  
  return(
    <StyledHeader>
      <StyledContainer>
        <div>
          <p>
            <strong>Meu carrinho</strong>
            <span>
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
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
