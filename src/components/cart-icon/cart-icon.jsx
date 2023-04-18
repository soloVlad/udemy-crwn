import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';
import { CartItemContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;