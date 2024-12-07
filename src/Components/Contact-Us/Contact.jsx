import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-page">
        <div className="container-contt">
          <div className="contact-section">
            <div className="image-section">
              <img
                src="/assets/img/AlShahin-contact.png"
                alt="Contact Us"
                className="contact-image"
              />
            </div>
            <div className="form-section">
              <h2 className="contact-title">CONTACT US</h2>
              <p className="contact-subtitle">
                YOU CAN CONTACT US, IF YOU HAVE ANY QUERY
              </p>
              <form className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone No"
                    className="form-input"
                  />
                  <select className="form-input">
                    <option>Services</option>
                    <option>Aluminium Window</option>
                    <option>Doors Works</option>
                    <option>Frameless Glass Doors</option>
                    <option>Partition Works</option>
                    <option>Curtain Wall</option>
                    <option>Aluminium Works</option>
                    <option>Aluminium Shower Enclosure Workss</option>
                    <option>Aluminium Wood Pergolas</option>
                    <option>Aluminum Composite Panel Cladding</option>
                    <option>Stainless Steel</option>
                    <option>Electroplating Stainless Steel Work</option>
                  </select>
                </div>
                <textarea
                  placeholder="Comments"
                  className="form-textarea"
                ></textarea>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
