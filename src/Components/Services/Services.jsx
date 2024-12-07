import React from "react";

const Services = () => {
  // Array of services
  const services = [
    "Aluminium Window",
    "Doors Works",
    "Frameless Glass Doors",
    "Partition Works",
    "Curtain Wall",
    "Aluminium Works",
    "Aluminium Shower Enclosure Works",
    "Aluminium Wood Pergolas",
    "Aluminum Composite Panel Cladding",
    "Stainless Steel",
    "Electroplating Stainless Steel Work",
  ];

  return (
    <>
      <section className="sec-kit">
        <div className="service-wrapper ">
          <div className="container ">
            <div className="row sec-kit">
              <div className="col-lg-8 elementor-widget-container">
                <h1 className=" Home-heading">
                  Al Shaheen Technical Services Dubai
                </h1>
                <div className="elementor-widget-container">
                  <p>
                    At{" "}
                    <span className="highlight">
                      {" "}
                      Al Shaheen Technical Services Dubai,
                    </span>{" "}
                    we aim at delivering the best and most distinct services to
                    the clients in Dubai. Our achievements are based on the
                    performance and proficient services that are in accordance
                    with the needs of our customers. Our management team has
                    extensive experience in the field of technical services. We
                    have a wide range of services that are being provided to our
                    highly satisfied clients in Dubai. Dedicated Technical
                    Services' sole purpose is to provide excellence and quality
                    services in this field.
                    <p>
                      {" "}
                      Al Shaheen grown in Dubai with vast experience and 25
                      employees, we // are one of the most advanced company
                      locally in the design and // production of architectural
                      aluminium system and glass. The company // has developed
                      its own system and successfully used on many landmark //
                      projects. Al Shaheen works with all well known certified
                      supplier. // We provide the profile mentioned (GULF
                      EXTRUSION) (ALUMIL) (GUTMAN) // (SCHUCO) Al shaheen
                      management recognizes the importance of // excellent
                      communication. Each and every staff have a clear and //
                      precise information about our steady growth and
                      profitability in the // market, which is an impact of
                      unblemished services rendered by our // staff and work
                      force. It makes me proud to see that each staff carry //
                      out their duties always keeping the customers first in
                      mind with a // high sense of morality and responsibility
                      as members of "Al // Shaheen". Our management approach is
                      achieving goals and targets // through our special mix of
                      skills, dedication, planning, expertise // and team
                      efforts, perfected by experience. Our clients advocate
                      this // as well. Innovation and flexibility go hand in
                      hand. We believe in // providing high level of customer
                      satisfaction, quality without // compromising. Existence
                      of "Al Shaheen" is only because of support // from our
                      valued customers. We always welcome customer suggestions
                      // and proposals for our continuous development and
                      fruitful customer // relationship. Please contact me on
                      email: // info.alshaheen5522@gmail.com with your valuable
                      suggestions
                    </p>
                  </p>
                </div>
                {/* <section className="sec-gap"></section> */}
              </div>
              <div className="col-lg-4">
                {/* Additional content can go here */}
              </div>
            </div>
            <div className="sec-gap"></div>
          </div>
        </div>
      </section>

      <section className="sec-kit">
        <div className=" container ">
          <h2 className="Home-heading">Al Shaheen Technical Services Dubai</h2>

          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="key-features-section">
        <div className="container text-center">
          <h1 className="Home-heading">
            Key Features of Al Shaheen Technical Services Dubai
          </h1>
          <div className="row align-items-center mt-5">
            {/* Left Column */}
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/Like-img2.jpg"
                alt="Quality Material"
                className="feature-icon"
              />
              <h3 className="feature-title">Quality Material</h3>
              <p className="feature-description">
                We use only the highest quality materials in all of our services
                and management to achieve optimal results and customer
                satisfaction.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/Like-img2.jpg"
                alt="Expert Team"
                className="feature-icon"
              />
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                We have an experienced team, from base to field, that adds grace
                and beauty to the work.
              </p>
            </div>

            {/* Center Image */}
            <div className="col-md-12 col-lg-6">
              <img
                src="/assets/img/services-img.jpg"
                alt="Worker"
                className="worker-image"
              />
            </div>

            {/* Right Column */}
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/Like-img2.jpg"
                alt="Reasonable Cost"
                className="feature-icon"
              />
              <h3 className="feature-title">Reasonable Cost</h3>
              <p className="feature-description">
                We offer ways to reduce costs and energy consumption while
                maintaining reasonable prices for technical services to our
                clients in Dubai.
              </p>
            </div>

            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/Like-img2.jpg"
                alt="Secure & Safe"
                className="feature-icon"
              />
              <h3 className="feature-title">Secure & Safe</h3>
              <p className="feature-description">
                We provide work and quality that is being delivered through safe
                and competent hands.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className="elementor-column">
            <div className="elementskit-infobox text-left">
              <div className="elementor-column elementor-col-33 ">
                <div className="elementskit-box-header">
                  {" "}
                  <img src="" alt="" />
                </div>
                <div className="body-box">
                  <h3>Expert Team</h3>
                  <p>
                    We have an experienced team, from base to field, that adds
                    grace and beauty to the work.
                  </p>
                </div>
              </div>
            </div>
            <div className="elementskit-infobox text-left">
              <div className="elementor-column elementor-col-33 ">
                <div className="elementskit-box-header">
                  {" "}
                  <img src="" alt="" />
                </div>
                <div className="body-box">
                  <h3>Expert Team</h3>
                  <p>
                    We have an experienced team, from base to field, that adds
                    grace and beauty to the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Services;
