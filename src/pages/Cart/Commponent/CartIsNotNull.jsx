import React from 'react';
import CartItem from './CartItem';
import CartAside from './CartAside';
import './CartIsNotNull.scss';

function CartIsNotNull({ cartItems, setCartItems }) {
  return (
    <article className="cartWrapper">
      <section className="cartItemsListWrapper">
        <div className="cartItemsListHeader">
          <button className="cartDelItems">전체삭제</button>
        </div>
        <ul className="cartItemsList">
          {cartItems &&
            cartItems.map(cartItems => (
              <CartItem
                key={cartItems.cartId}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
        </ul>
      </section>
      <CartAside cartItems={cartItems} setCartItems={setCartItems} />
    </article>
  );
}

export default CartIsNotNull;
