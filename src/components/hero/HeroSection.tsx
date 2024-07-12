import './HeroSection.css'

export default function HeroSection() {
    return (
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Welcome to Ecomshop</h1>
          <p className="hero__subtitle">
            Your one stop shop for fully fledge e-commerce applications.
          </p>
        </div>
      </section>
    );
}