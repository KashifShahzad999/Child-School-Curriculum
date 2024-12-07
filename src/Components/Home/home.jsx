import React from "react";

function Home() {
  function requestCallback() {
    const phoneNumber = document.getElementById("phoneInput").value;
  }
  return (
    <section>
      <div className="home-wrapper">
        <div className="container elementor-container elementor-column-gap-default">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="heading-title">Great Technology</span>
              <h5 className="elementor-heading-title elementor-size-default ">
                Best Technical Services
              </h5>
              <p>
                As a proficient company operating in Dubai, AL Shaheen Technical
                Services always strives to meet the demands of its clients with
                skill and capability.
              </p>
            </div>
            <div className="home-img">
              <img src="/assets/img/technical-services.webp" alt="" />
            </div>
          </div>
          <div class="input-container">
            <input
              type="text"
              id="phoneInput"
              placeholder="Input Your Number"
            />
            <button onClick={requestCallback}>REQUEST CALL BACK</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
