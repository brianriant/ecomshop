
export default function About(){
    return (
      <section
        style={{
          backgroundImage: "var(--background-image)",
          WebkitMask: "var(--masks)",
          mask: "var(--masks)",
        }}
        className="  p-[120px_20px] text-center ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl mb-5 font-bold text-[var(--title-color)]">
            About Ecomshop
          </h1>
          <p className="text-2xl mb-10 font-bold text-[var(--type-color)]">
            We are your one-stop destination for the best e-commerce experience.
          </p>
          <div className="flex flex-row gap-10 items-center flex-wrap md:flex-col md:text-center">
            <div className="flex-1 text-left text-[var(--text-color)] text-base leading-relaxed md:text-center">
              <p className="mb-5 font-bold">
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
            <div className="flex-1 mt-5 md:mt-0">
              <img
                src="https://i.pinimg.com/originals/56/66/04/566604cdcde4738aa4fefe689790f9e4.jpg"
                alt="About Ecomshop"
                className="w-full rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
    );
}