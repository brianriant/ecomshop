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

//  <div class="container">
        
//         <div class="details">
//             <div class="content">
//                 <h2>Jordan Proto-Lyte <br>
//                     <span>Running Collection</span>
//                 </h2>
//                 <p>
//                     Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
//                     made for all-day, bouncy comfort.
//                     Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
//                     breathable support.
//                     Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
//                     Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
//                 </p>
//                 <h3>Rs. 12,800</h3>
//                 <button>Buy Now</button>
//             </div>
//         </div>
//     </div>