import './HeroSection.css'
import Button from '../button/Button';

export default function HeroSection() {
  const handleShopNowClick = () => {
    alert('Ready to shop 🤝')
  }

    return (
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Welcome to Ecomshop</h1>
          <p className="hero__subtitle">
            Your one stop shop for fully fledge e-commerce applications.
          </p>
          <Button variant='primary' onClick={handleShopNowClick} >Shop Now</Button>
        </div>
      </section>
    );
}