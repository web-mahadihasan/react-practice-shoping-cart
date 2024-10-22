import PropTypes from "prop-types";

const Product = ({product, addToCart}) => {
  const { title, price, image, category, rating } = product;
  return (
    <div>
      <div className="card card-compact text-gray-700 bg-white shadow-sm h-full">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-[250px] w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-medium">{title}</h2>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating?.rate}</p>
          <div className="card-actions">
            <button className="btn btn-primary font-medium text-lg" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default Product;