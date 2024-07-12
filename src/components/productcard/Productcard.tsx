import './ProductCard.css'


interface ProductProps {
    image: string;
    title: string;
    price: string;
    onAddToCart: React.MouseEventHandler;
}

export default function ProductCard(
    { image, title, price, onAddToCart} : ProductProps) {
    return (
        <div className='product-card'>
            <img src={image} alt={title} className='product-card__image' />
            <div className='product-card__info'>
                <h2 className='product-card__title'>{title}</h2>
                <p className='product-card__price'>Ksh.{price}</p>
                <button className='product-card__button' onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}