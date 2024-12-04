import React from 'react'

function Contact() {
  return (
    <section className="contact-section" id="Contact">
    <div className="container">
      <div className="contact-us-section">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="sec-head md-mb80 wow fadeIn">
              <h6 className="sub-title mt-5 opacity-7"> Get In Touch</h6>
              <h2 className="sec-heading">
                Let is make your brand brilliant!
              </h2>
              <p className="fz-15 mt-2">
                {" "}
                If you would like to work with us or just want to get in
                touch, we’d love to hear from you!
              </p>
            </div>
          </div>

          <div className="col-lg-7 col-md">
            <div className="full-width wow fadeIn">
              {/* <form onSubmit={handleSubmit}> */}
                <div className="massege"> </div>

                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group mb-30">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Please enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group mb-30">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="support@gmail.com"
                        required
                      />
                      {/* <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      /> */}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group mb-30">
                      <input
                        type="subject"
                        id="form_subject"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group ">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                      />
                      {/* <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      /> */}
                    </div>
                    <button
                      className="send-btn "
                      type="submit"
                    //   disabled={state.submitting}
                    >
                      <span className="text">SEND A MESSAGE</span>
                    </button>
                  </div>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
