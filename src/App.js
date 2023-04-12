import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


// import {enableMapSet} from "immer"
// enableMapSet() ;

function App() {
 
  const toShow = useSelector(state => state.ui.cartIsVisible ) ;

  return (
    <Layout>
      {toShow && < Cart />}
      <Products />
    </Layout>
  );
}

export default App;
