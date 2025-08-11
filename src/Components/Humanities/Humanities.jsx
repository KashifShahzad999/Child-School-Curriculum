import React from "react";
import "./Humanities.css";

export default function Humanities() {
  return (
    <div className="technologies-page">
      <h1 className="main-heading">Humanities and Social Sciences</h1>

      {/* Section 1 */}
      <section className="two-column">
        <div className="content">
          <h1>Importance of HASS in Creativity</h1>
          <p>
            Humanities and Social Sciences (HASS) in early childhood education
            nurtures identity, empathy, critical thinking, and cultural
            awareness. Through storytelling, inquiry, and role-play, children
            explore relationships, community roles, and global diversity. When
            implemented through a creative lens, HASS fosters a sense of wonder
            about the human experience and empowers children to{" "}
            <strong>engage in meaning-making about their world</strong>.
            Inquiry-based learning strategies allow learners to co-construct
            knowledge through discussion, questioning, and real-world
            investigation (Bahtiar et al., 2024). Vygotsky’s sociocultural
            theory situates learning as a collaborative process shaped by
            culture and interaction (Lantolf, Xi & Minakova, 2021).
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img src="/assets/img/hass1.jpeg" alt="Children exploring culture" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="two-column">
        <div className="image">
          <img
            src="/assets/img/music5.jpeg"
            alt="Kids learning through stories"
          />
        </div>
        <div className="content">
          <h1>Theoretical Foundations</h1>
          <p>
            <strong>Vygotsky’s Sociocultural Theory</strong> highlights the role of dialogue,
            tools, and shared cultural practices in shaping cognition. In HASS,
            children’s experiences are mediated by stories, artifacts, and adult
            guidance, enabling them to develop language, empathy, and critical
            consciousness (Imsallim et al., 2025). Inquiry-Based Learning (IBL)
            promotes learning through questioning, exploration, and discovery.
            Moemeke et al. (2025) <br /> <strong>emphasize that IBL</strong> cultivates curiosity and
            civic engagement, especially when grounded in real-world issues and
            social narratives.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>
      </section>

      {/* Section 3 */}
      <section className="two-column">
        <div className="content">
          <h1>Resources, Materials, and Digital Technologies</h1>
          <p>
            <h6>Traditional Resources:</h6>• Family and community photographs{" "}
            <br /> • Dress-ups representing different jobs and cultures <br /> •
            Storybooks on belonging, celebrations, and history
            <h6>Recycled/Found Materials:</h6>• Maps, newspapers, cardboard for
            role-play shops or community scenes <br /> • Puppets, dolls, and
            home corner props
            <h6>Digital Technologies:</h6>• Google Earth, interactive digital
            maps <br /> • Virtual museum and gallery tours <br /> • Storytelling
            apps (e.g., My Story, ChatterPix) <br /> • Translation and
            speech-to-text tools for multilingual learning
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img src="/assets/img/hass3.jpeg" alt="Cultural learning tools" />
        </div>
      </section>

      {/* Age group sections */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/hass4.jpeg" alt="Family photo activity" />
        </div>
        <div className="content">
          <h1>0–2 Years</h1>
          <h5>1. Family Photo Wall</h5>
          <p>
            • Description: Babies explore laminated family photos, naming
            members and connecting to home. <br />• Creativity Fostered: Builds
            emotional literacy and social bonds.
          </p>
          <h5>2. Cultural Music Circle</h5>
          <p>
            • Description: Families contribute songs or instruments; children
            explore global rhythms. <br />• Creativity Fostered: Encourages
            cultural appreciation and shared expression.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>2–3 Years</h1>
          <h5>1. Identity Dolls and Dress-ups</h5>
          <p>
            • Description: Children use multicultural dolls or costumes to
            role-play family or community life. <br />• Creativity Fostered:
            Encourages empathy, diversity awareness, and symbolic play.
          </p>
          <h5>2. Class Community Map</h5>
          <p>
            • Description: Using photos, symbols, or drawings, children
            co-create a map of places they visit (e.g., park, doctor, shop).{" "}
            <br />• Theory Link: Builds place-awareness and belonging (Bahtiar
            et al., 2024).
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img
            src="/assets/img/hass5.jpeg"
            alt="Children with cultural dolls"
          />
        </div>
      </section>

      <section className="two-column">
        <div className="image">
          <img src="/assets/img/hass6.jpeg" alt="Role play community helpers" />
        </div>
        <div className="content">
          <h1>3–5 Years</h1>
          <h5>1. Community Helper Role Play</h5>
          <p>
            • Description: Children act out scenarios as doctors, firefighters,
            or postal workers using props and scripts. <br />• Creativity
            Fostered: Develops social imagination and understanding of
            interdependence.
          </p>
          <h5>2. Celebration Inquiry Box</h5>
          <p>
            • Description: A rotating box includes artifacts from different
            cultural celebrations. <br />• Creativity Fostered: Encourages open
            discussion and appreciation of diversity.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>6–8 Years</h1>
          <h5>1. Virtual Museum Tours</h5>
          <p>
            • Description: Children explore historical or cultural museums
            virtually and journal their reflections. <br />• Creativity
            Fostered: Builds observational and analytical skills through digital
            exploration.
          </p>
          <h5>2. “Who Am I?” Projects</h5>
          <p>
            • Description: Children create digital or poster-based
            autobiographies with pictures, voice, and text. <br />• Creativity
            Fostered: Promotes self-reflection and personal narrative.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img
            src="/assets/img/hass7.jpeg"
            alt="Child presenting Who Am I project"
          />
        </div>
      </section>

<section className="video-section" style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px 0" }}>
  <video
    width="320"
    height="240"
    controls
    src="/assets/img/vedio14.mp4"
    type="video/mp4"
  >
    Your browser does not support the video tag.
  </video>

  <video
    width="320"
    height="240"
    controls
    src="/assets/img/vedio15.mp4"
    type="video/mp4"
  >
    Your browser does not support the video tag.
  </video>
</section>


<div style={{
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  textAlign: 'right',
  fontWeight: 'bold',
  backgroundColor: 'rgba(255,255,255,0.7)', // optional translucent background
  padding: '6px 10px',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0,0,0,0.2)',
  fontFamily: "'Poppins', sans-serif",
  zIndex: 1000
}}>
  <div>Feezan Mukhtar</div>
  <div>IKO3006707</div>
</div>


    </div>
  );
}
