import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const items = useSelector(state => state.cart.items);
  const itemList = items.map(item => {
    const total = item.price * item.count;
    const itemProp = { ...item, quantity: item.count, total: total }
    return <CartItem key={ item.id } item={ itemProp } />
  });

  return (
    <Card className={ classes.cart }>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem  item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}  /> */}
        { itemList }
      </ul>
    </Card>
  );
};

export default Cart;
