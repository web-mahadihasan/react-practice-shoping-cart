import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import CartItems from '../CartItems/CartItems';
import { getDataFromLS, removeProductFromLs, setDataLS } from '../../utilities/localStorage';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if(!response.ok){
        throw new Error(`Network not respond`)
      }
      const data = await response.json()
      setProducts(data);
    }
    loadData();
  }, [])

useEffect(() => {
  if(products.length > 0){
    const showLSData = getDataFromLS();
    setShoppingCart(showLSData);
    const cartPriceFromLS = showLSData.reduce((prev, curr) => prev + curr.price, 0);
    setTotalPrice((cartPriceFromLS.toFixed(2)));
  }
}, [products]);

  const handleAddToCart = (product) => {
    if (!shoppingCart.includes(product)) {
      const newCart = [...shoppingCart, product];
      setShoppingCart(newCart);
      setDataLS(newCart);

      const cartPrice = newCart.reduce((prev, curr)=> prev + curr.price,0)
      setTotalPrice((cartPrice.toFixed(2)));
    }    
  }

  const handleRemove = (removeProductId) => {
    const remainingProduct = shoppingCart.filter(product => product.id !== removeProductId)
    setShoppingCart(remainingProduct);
    const cartPrice = remainingProduct.reduce((prev, curr) => prev + curr.price, 0);
    setTotalPrice(cartPrice.toFixed(2));
    removeProductFromLs(removeProductId);

  }


  return (
    <div>
      <CartItems cartItems = {shoppingCart} totalPrice = {totalPrice} handleRemove = {handleRemove}/>
      <h3 className='text-2xl font-bold text-center py-6'>Discover Amazing Deals on Fashion, Tech, and More</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;