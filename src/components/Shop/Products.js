import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: "1", price: 20, title: "Flower", description: "It is good flower"  },
  { id: "2", price: 100, title: "Pot", description: "To Keep the flower intact"  },
  { id: "3", price: 50, title: "Pipe", description: "To Water the flower" },
]

const Products = (props) => {

  const listOfProducts = DUMMY_PRODUCTS.map((product) => {
    return (
      <ProductItem
        key={ product.id }
        id = { product.id }
        title={ product.title }
        price={ product.price }
        description={ product.description }
      />
    )
  });

  // console.log(listOfProducts);

  return (
    <section className={ classes.products }>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title='Test'
          price={ 6 }
          description='This is a first product - amazing!'
        /> */}
        {listOfProducts}
      </ul>
    </section>
  );
};

export default Products;
