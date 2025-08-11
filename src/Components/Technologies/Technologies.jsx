import React from "react";
import "./Technologies.css";

export default function Technologies() {
  return (
    <div className="technologies-page">
      <h1 className="main-heading">Technologies</h1>

      {/* Section 1 */}
      <section className="two-column">
        <div className="content">
          <h1>Importance of Technology in Creativity</h1>
          <p>
            Digital technologies offer new frontiers for creativity in early
            childhood. They expand the boundaries of traditional play, enabling
            children to code stories, design digital art, animate characters,
            and explore virtual environments. When integrated appropriately,
            technology becomes a{" "}
            <strong>
              medium for expression, collaboration, and problem-solving
            </strong>
            . Early tech experiences support{" "}
            <strong>multimodal learning</strong>
            and digital fluency, crucial for navigating a technologically driven
            world (Tseng et al., 2022). As Belda-Medina and Calvo-Ferrer (2022)
            observe, digital tools in the classroom can enhance engagement,
            personalization, and cross-disciplinary creativity when grounded in
            pedagogical frameworks.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img src="/assets/img/tech1.jpeg" alt="Children using tablets" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/tech2.jpeg" alt="Early coding activity" />
        </div>
        <div className="content">
          <h1>Theoretical Foundations</h1>
          <p>
            <strong>Digital Play Theory</strong> (Marsh, 2010) conceptualizes
            technology use as a form of play—creative, self-directed,
            exploratory, and social. Children do not merely consume digital
            content; they remix, narrate, and build it, expanding imaginative
            capacities. <br />{" "}
            <strong>Technological Pedagogical Content Knowledge (TPACK)</strong>{" "}
            (Mishra & Koehler, 2006) describes the teacher’s ability to
            integrate technology meaningfully into learning. TPACK ensures that
            digital tools are not add-ons but embedded within creative,
            content-rich experiences (Thyssen et al., 2023).
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>
      </section>

      {/* Section 3 */}
      <section className="two-column">
        <div className="content">
          <h1> Resources, Materials, and Digital Technologies</h1>
          <p>
            <h6>Hardware Tools:</h6>• Tablets (iPads, Android) with
            child-friendly apps <br /> • Interactive whiteboards <br />• Voice
            recorders and styluses
            <h6>Programmable Toys:</h6>• <br /> • Bee-Bot, Cubetto, Botley for
            early coding <br /> • Osmo for interactive tangibles and AR
            <h6>Digital Creative Tools:</h6>• Toca Builders, Draw & Tell, Book
            Creator, Stop Motion Studio <br /> • Green screen apps (e.g., Do Ink) for
            storytelling and imaginative backgrounds <br /> • WebQuests and digital
            scavenger hunts
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img src="/assets/img/tech3.jpeg" alt="Tech tools for kids" />
        </div>
      </section>

      {/* Learning Experiences by Age Group */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/tech4.jpeg" alt="Toddlers with devices" />
        </div>
        <div className="content">
          <h1>Learning Experiences by Age Group</h1>
          <h6>0–2 Years</h6>
          <h5>1. Touchscreen Scribbling</h5>
          <p>
            • Description: Infants use drawing apps to create visual marks.{" "}
            <br /> • Creativity Fostered: Builds hand-eye coordination and color
            recognition. <br /> • Theory Link: Digital exploration as sensory
            play (Marsh, 2010).
          </p>
          <h5>2. Video Mirroring</h5>
          <p>
            • Description: Babies watch and mimic themselves using front-facing
            cameras. <br /> • Creativity Fostered: Enhances self-awareness and
            early communication.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>2–3 Years: First Tech Play</h1>
          <h5>1. Drag-and-Drop Puzzle Apps</h5>
          <p>
            • Description: Children solve digital puzzles by matching shapes,
            animals, or sounds. <br /> • Creativity Fostered: Supports
            categorization, spatial reasoning, and cause-effect learning.
          </p>
          <h5>2. Audio Storytelling</h5>
          <p>
            • Description: Record children's voice describing pictures or
            actions. <br /> • Creativity Fostered: Builds narrative fluency and
            self-expression.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img src="/assets/img/tech5.jpeg" alt="Young children coding" />
        </div>
      </section>

      <section className="two-column">
        <div className="image">
          <img src="/assets/img/tech6.jpeg" alt="Collaborative robotics" />
        </div>
        <div className="content">
          <h1>3–5 Years: Explore & Create</h1>
          <h5>Bee-Bot Coding Maze</h5>
          <p>
            • Description: Children program Bee-Bots to navigate mazes or tell
            stories. <br /> • Creativity Fostered: Introduces algorithmic
            thinking and storytelling. <br /> • Theory Link: Combines content
            knowledge with digital pedagogy (TPACK framework; Tseng et al.,
            2022).
          </p>
          <h5>2. Green Screen Imaginative Play</h5>
          <p>
            • Description: Children perform in front of green screens and
            superimpose imaginative settings. <br /> • Creativity Fostered:
            Fosters digital storytelling, visual literacy, and narrative design.
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>6–8 Years: Advanced Tech Projects</h1>
          <h5>1. Coding a Story with ScratchJr</h5>
          <p>
            • Description: Children animate characters to act out a story they
            create. <br /> • Creativity Fostered: Builds logical sequencing,
            dialogue, and visual programming. <br /> • TPACK Link: Supports
            meaningful integration of tech into literacy (Belda-Medina &
            Calvo-Ferrer, 2022).
          </p>
          <h5>2. WebQuest Challenge</h5>
          <p>
            • Description: Children follow a guided digital scavenger hunt to
            solve a problem or explore a topic. <br /> • Creativity Fostered:
            Promotes research, critical thinking, and cross-curricular
            connections
          </p>
          {/* <button className="cta-btn">Learn More</button> */}
        </div>

        <div className="image">
          <img src="/assets/img/tech7.jpeg" alt="Child coding a game" />
        </div>
      </section>

      <section className="video-section" style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px 0" }}>
  <video
    width="320"
    height="240"
    controls
    src="/assets/img/vedio11.mp4"
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
