import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ unique, id, title, price, image, rating }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
      <Card>
        <Card.Img variant="top" className="product_image" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="star_div">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </Card.Text>
          <Card.Text className="price_div">₹{price}</Card.Text>
          <Button onClick={addToBasket} variant="success">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
