const getDataFromLS = () => {
  const getLSCart = localStorage.getItem('cart');
  if(getLSCart){
    return JSON.parse(getLSCart)
  }else{
    return []
  }
}

const saveCartToLs = (saveCart) =>{
  const cartStringify = JSON.stringify(saveCart);
  localStorage.setItem('cart', cartStringify)
}


const setDataLS = (productCart) => {
  const  cartData = getDataFromLS()
  cartData.push(productCart)
  saveCartToLs(productCart);
  // console.log(cartData)
}
const removeProductFromLs = (p) => {
  const cartP = getDataFromLS();
  const remaining = cartP.filter(items => items.id !== p);
  saveCartToLs(remaining);
};

export { getDataFromLS, setDataLS, removeProductFromLs };

