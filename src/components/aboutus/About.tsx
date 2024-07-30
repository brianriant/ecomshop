import './About.css'

export default function About(){
    return (
      <section className="about">
        <div className="about__container">
          <h1 className="about__title">About Ecomshop</h1>
          <p className="about__subtitle">
            We are your one-stop destination for the best e-commerce experience.
          </p>
          <div className="about__content">
            <div className="about__text">
              <p>
                At Ecomshop, we believe in providing our customers with the
                finest selection of products, exceptional customer service, and
                an unbeatable shopping experience. Our mission is to make online
                shopping easy, enjoyable, and accessible for everyone.
              <br />
                Our team is dedicated to curating a diverse range of products
                that cater to various needs and preferences. From the latest
                tech gadgets to trendy fashion items, we have something for
                everyone. We constantly update our inventory to bring you the
                latest and greatest products in the market.
              <br />
                Thank you for choosing Ecomshop. We look forward to serving you
                and making your shopping experience extraordinary.
              </p>
            </div>
            <div className="about__image">
              <img
                src="https://i.pinimg.com/originals/56/66/04/566604cdcde4738aa4fefe689790f9e4.jpg"
                alt="About Ecomshop"
              />
            </div>
          </div>
        </div>
      </section>
    );
}