import { Button } from '../index'
import './ProductCard.css'

export interface ProductProps {
  id: number;
  image: string;
  price: number;
  title: string;
  category: string;
  description: string;
  onBuy: () => void;
}

export default function ProductCard(
    { image, title, price,category,description, onBuy} : ProductProps) {
    return (
      <div className="product__container">
        <div className="product__image">
        <img src={image} alt={title}  />
        </div>
        <div className="product__details">
          <h2>{title} <br></br><span> {category} </span> </h2>
          <p>{description}</p>
          <h3>Ksh.{price}</h3>
          <Button
            children={"Buy Now"}
            variant="primary"
            onClick={onBuy}
          />
        </div>
      </div>
    );
}
