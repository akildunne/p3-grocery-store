import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
      <>
          <Link className="product" to={`/api/products/${props._id}`}>
              <img className="product-image" src={props.imgURL} alt={props.name} />
              <div className="product-name">{props.product}</div>
              <div className="price">{`$${props.price}`}</div>
          </Link>
      </>
  )
}

export default ProductCard; 