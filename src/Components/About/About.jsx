import React from "react";

// function About() {
//   return (
//     <section className="home-section" id="home">
//       <div className="about-wrapper">
//         <div className="container ">
//           <div className="col-lg-6">
//             Al Shaheen grown in Dubai with vast experience and 25 employees, we
//             are one of the most advanced company locally in the design and
//             production of architectural aluminium system and glass. The company
//             has developed its own system and successfully used on many landmark
//             projects. Al Shaheen works with all well known certified supplier.
//             We provide the profile mentioned (GULF EXTRUSION) (ALUMIL) (GUTMAN)
//             (SCHUCO) Al shaheen management recognizes the importance of
//             excellent communication. Each and every staff have a clear and
//             precise information about our steady growth and profitability in the
//             market, which is an impact of unblemished services rendered by our
//             staff and work force. It makes me proud to see that each staff carry
//             out their duties always keeping the customers first in mind with a
//             high sense of morality and responsibility as members of "Al
//             Shaheen". Our management approach is achieving goals and targets
//             through our special mix of skills, dedication, planning, expertise
//             and team efforts, perfected by experience. Our clients advocate this
//             as well. Innovation and flexibility go hand in hand. We believe in
//             providing high level of customer satisfaction, quality without
//             compromising. Existence of "Al Shaheen" is only because of support
//             from our valued customers. We always welcome customer suggestions
//             and proposals for our continuous development and fruitful customer
//             relationship. Please contact me on email:
//             info.alshaheen5522@gmail.com with your valuable suggestions
//           </div>
//           <div className="col-lg-6"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


// import "./AboutUs.css"; // Custom CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Banner Section */}
      <section className="about-banner text-center">
        <h1>ABOUT US</h1>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6  ">
              <h2>About Us</h2>
              <p>
                <span className="highlight">Al Shaheen Technical Services</span> is among the most competent and
                thriving technical services providers in Dubai. The strength of our competency and sustainability lies
                within our management team, which has years of experience in the respective field. Once handing over
                work to us, our clients can rest assured that the work will be carried out accurately and efficiently,
                as we are highly respected for our technical excellence and professional reliability in Dubai.
              </p>
              <p>
                Our aim is to provide the best customer service to our customers in Dubai. Dedicated Technical Services
                core values are commitment to all aspects of the business, customer satisfaction, and reliability. Our
                skilled team is committed to providing the best results for our clients. Client satisfaction with our
                finest work is of our core importance.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/assets/img/About-Us.webp" alt="Worker" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="/assets/img/Our-Vision-1.webp" alt="Tools" className="vision-image" />
            </div>
            <div className="col-md-6">
              <h2>Our Vision</h2>
              <p>
                Dedicated Technical Services' objective is to provide fast and reliable services to the customers in
                Dubai who are seeking technical services. Providing our finest services, we make your ideas come true.
                Our priority is to ensure your comfortability and assurance and above all, your satisfaction with our
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
