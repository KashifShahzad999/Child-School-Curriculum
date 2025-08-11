import React from "react";
import "./Curriculum.css";

export default function Curriculum() {
  return (
    <div className="technologies-page">
      <h1 className="main-heading">
        Integrated Curriculum (STEM, STEAM, STREAM, STEMIE)
      </h1>

      {/* Section 1 */}
      <section className="two-column">
        <div className="content">
          <h1>Importance of Integrated Curriculum in Early Childhood</h1>
          <p>
            Integrated curriculum models such as{" "}
            <strong>
              STEM (Science, Technology, Engineering, Mathematics), STEAM (adds
              Arts), STREAM (adds Reading/Religion), and STEMIE (adds Inclusion)
            </strong>{" "}
            reflect a shift from siloed learning to interdisciplinary
            exploration, critical for nurturing 21st-century skills. These
            models allow children to think holistically, connect ideas across
            domains, and engage in project-based learning where curiosity,
            collaboration, and creativity flourish. In early years, integration
            fosters deeper engagement through play-based design thinking,
            supporting intellectual, emotional, and physical development.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/crum1.jpeg" alt="Children learning together" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/crum2.jpeg" alt="Collaborative learning" />
        </div>
        <div className="content">
          <h1> Theoretical Foundations</h1>
          <p>
            <strong>
              Interdisciplinary Learning Theory <br />
              21st-Century Learning Skills framework prioritizes the
              “4Cs”—Creativity, Critical Thinking, Communication, and
              Collaboration. Integrated curricula cultivate these skills through
              maker-centred pedagogy, inquiry, and teamwork (Ramesh, 2025).
            </strong>{" "}
            emphasizes blending subject areas to enhance meaningful connections.
            Rather than learning math or science in isolation, children explore
            problems that integrate multiple skills—like building a bridge,
            planting a garden, or designing a story-based robot (Retno et al.,
            2025). <br />
            <strong>21st-Century Learning Skills</strong> framework prioritizes
            the “4Cs”—Creativity, Critical Thinking, Communication, and
            Collaboration. Integrated curricula cultivate these skills through
            maker-centred pedagogy, inquiry, and teamwork (Ramesh, 2025).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      {/* Section 3 */}
      <section className="two-column">
        <div className="content">
          <h1>Resources, Materials, and Digital Technologies</h1>
          <p>
            <h6>• Traditional/Physical Materials:</h6> • Loose parts: cardboard
            tubes, wood scraps, textiles <br /> • Art supplies: paint, clay,
            recycled paper <br /> • STEM kits: pulleys, magnets, wheels •
            Nature-based materials: leaves, sticks, seeds
          </p>
          <h6>Digital Technologies:</h6>
          <p>
            • Robotics: Bee-Bots, Ozobots, LEGO WeDo • Maker Tools: TinkerCAD
            (3D design), Scratch Jr. (coding) <br />
            • Recording Tools: Tablets for documenting processes <br />• Virtual
            Field Trips: Live cams, museum tours <br />• Accessible/Inclusive
            Tools (for STEMIE): <br /> • Adapted scissors, sensory bins <br /> •
            Speech-generating apps for learners with communication needs <br />{" "}
            • Color-coded instruction cards
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/curm3.jpeg" alt="Group project resources" />
        </div>
      </section>

      {/* Learning Experiences by Age Group */}
      <section className="two-column">
        <div className="image">
          <img
            src="/assets/img/curm4.jpeg"
            alt="Young children working together"
          />
        </div>
        <div className="content">
          <h1>Learning Experiences by Age Group</h1>
          <h6>0–2 Years</h6>
          <h5>1. Building with Loose Parts</h5>
          <p>
            • Activity: Infants stack, bang, or roll tubes, boxes, and lids.{" "}
            <br /> • Learning Outcome: Encourages sensory exploration, spatial
            awareness. <br />• Integration: Science (movement), Engineering
            (building), Art (arranging).
          </p>
          <h5>2. Sound Exploration Station</h5>
          <p>
            • Activity: Children play with containers filled with beads, rice,
            bells. <br /> • Learning Outcome: Develops auditory discrimination
            and cause-effect logic. <br /> • Integration: Music, Science,
            Technology (sound creation).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>2–3 Years: Early Connections</h1>
          <h5>1. Grow-and-Measure Plant Project</h5>
          <p>
            • Activity: Children plant seeds, water daily, and measure growth.{" "}
            <br /> • Learning Outcome: Builds responsibility, observation, and
            measurement. <br /> • Integration: Science (biology), Math
            (measurement), Technology (photo journals), Literacy (labelling).
          </p>
          <h5>2. Story Engineering (STEAM)</h5>
          <p>
            • Activity: Children read “Three Little Pigs” and build houses from
            different materials to test wind resistance. <br /> • Learning
            Outcome: Combines narrative comprehension with engineering and
            science inquiry. <br /> • Integration: Reading, Engineering,
            Science, Arts.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img
            src="/assets/img/curm5.png"
            alt="Children engaging in themed play"
          />
        </div>
      </section>

      <section className="two-column">
        <div className="image">
          <img
            src="/assets/img/curm6.jpeg"
            alt="Collaborative creative project"
          />
        </div>
        <div className="content">
          <h1>3–5 Years: Explore & Connect</h1>
          <h5>1. Grow-and-Measure Plant Project</h5>
          <p>
            • Activity: Children plant seeds, water daily, and measure growth.{" "}
            <br /> • Learning Outcome: Builds responsibility, observation, and
            measurement. <br /> • Integration: Science (biology), Math
            (measurement), Technology (photo journals), Literacy (labelling).
          </p>
          <h5>2. Story Engineering (STEAM)</h5>
          <p>
            • Activity: Children read “Three Little Pigs” and build houses from
            different materials to test wind resistance. <br /> • Learning
            Outcome: Combines narrative comprehension with engineering and
            science inquiry. <br /> • Integration: Reading, Engineering,
            Science, Arts.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>6–8 Years:</h1>
          <h5>1. Design a Bridge” Challenge</h5>
          <p>
            • Activity: Children use recyclables to design a bridge that can
            hold toy cars. <br /> • Learning Outcome: Encourages critical
            thinking, trial-and-error problem solving. <br /> • Integration:
            Engineering, Math (measurement), Technology (recording builds), Arts
            (aesthetic design).
          </p>
          <h5>2. Code a Story</h5>
          <p>
            • Activity: Children use Scratch Jr. to animate a story they wrote
            collaboratively. <br /> • Learning Outcome: Fosters computational thinking,
            narrative logic, and teamwork. <br />    • Integration: Literacy, Technology,
            Arts, Logic.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img
            src="/assets/img/curm7.png"
            alt="Older children working on projects"
          />
        </div>
      </section>
    </div>
  );
}
