import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button';

import {
  ProductCartContainer,
  ProductImage,
  Footer,
  ProductName,
  ProductPrice
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <ProductImage src={imageUrl} alt={name} />
      <Footer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Footer>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCartContainer>
  );
};

export default ProductCard;