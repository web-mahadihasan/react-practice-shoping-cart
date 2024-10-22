import PropTypes from "prop-types";

const CartItems = ({ cartItems, totalPrice }) => {
 
  return (
    <div className="py-4 border-t border-b my-4">
      <h4 className="text-center font-semibold text-xl text-white">
        Your Cart items: {cartItems.length}{" "}
      </h4>
      <h4 className="text-center font-semibold text-base text-white py-2">Total Price: {totalPrice}</h4>

      <div className="grid grid-cols-10 gap-4">
        {cartItems.map((items) => (
          <div key={items.id}>
            <img
              src={items.image}
              alt=""
              className="w-full h-[90px] rounded-lg object-cover"
            />
            <p>Qty: 1</p>
            <p>Price: ${items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

CartItems.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired
}

export default CartItems;

