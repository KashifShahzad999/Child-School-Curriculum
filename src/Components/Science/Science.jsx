import React from "react";
import "./Science.css";

export default function Science() {
  return (
    <div className="science-page">
      <h1 className="main-heading">Science</h1>

      {/* Section 1 */}
      <section className="two-column">
        <div className="content">
          <h1>Importance of Science in Creativity</h1>
          <p>
            Science in early childhood education is a catalyst for creative
            inquiry. Children are natural scientists—observing, questioning, and
            experimenting to make sense of their world. Science learning
            nurtures curiosity, divergent thinking, and problem-solving skills
            when grounded in hands-on discovery. In STEAM contexts, science is
            no longer isolated but integrated with art, engineering, and
            technology to encourage <strong>creative confidence</strong> and
            cross-domain fluency (Liu et al., 2023). Through project-based
            exploration, children develop foundational scientific literacy and
            imaginative thinking, preparing them to become resilient, flexible
            learners (Ramesh, 2025).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/sci1.jpeg" alt="Children exploring science" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/sci2.jpeg" alt="Hands-on experiment" />
        </div>
        <div className="content">
          <h1>Theoretical Foundations</h1>
          <p>
            <strong>Jerome Bruner’s Inquiry-Based Learning</strong> model
            emphasizes discovery as the core of learning. Bruner (1961) argued
            that young learners must be active participants in the construction
            of knowledge, not passive recipients. This approach is highly
            compatible with early science education, where children engage in
            hands-on experiments, ask "what if?" questions, and test hypotheses
            through observation and play. <br />{" "}
            <strong>STEAM and STEM Integration</strong> expands science beyond
            facts and procedures. It invites children to connect scientific
            knowledge with <strong>creativity, arts, and engineering</strong>{" "}
            through interdisciplinary tasks. As Parajuli (2023) notes, effective
            STEAM education fosters holistic development—combining critical
            thinking with artistic imagination and design fluency. Project-Based
            Learning (PjBL-STEM) also enhances collaborative learning and
            creativity in early settings (Retno et al., 2025).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      {/* Section 3 */}
      <section className="two-column">
        <div className="content">
          <h1>Resources, Materials, and Digital Technologies</h1>
          <p>
            <h6>Traditional Materials:</h6>
            • Observation tools: magnifying glasses, mirrors, tweezers, magnets
            <br />
            • Measuring tools: pipettes, rulers, scales
            <br />
            • Natural objects: soil, seeds, stones, feathers, insects
            <br />
            <br />
            <h6>Recycled/Found Materials:</h6>
            • Bottle caps, old jars, spoons, plastic trays for water/sand
            experiments
            <br />
            • Cardboard tubes and boxes for structure-building or force
            exploration <br />• Leaves and fabrics for tactile classification
            and texture analysis <br />
            <br />
            <h6>Digital Technologies:</h6>
            • Apps: Seek by iNaturalist, Little Alchemy, Toca Lab: Elements for
            guided inquiry
            <br />
            • Digital microscopes for magnification and zoom <br />• Digital
            microscopes for magnification and zoom <br />• Time-lapse tools for
            plant growth observation
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/sci3.jpeg" alt="Science tools" />
        </div>
      </section>

      {/* Learning Experiences by Age Group */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/sci4.jpeg" alt="Science with toddlers" />
        </div>
        <div className="content">
          <h1>Learning Experiences by Age Group</h1>
          <h6>0–2 Years</h6>
          <h5>1. Ice Play Observation</h5>
          <p>
            • Description: Children explore melting ice, feeling temperature
            changes and water texture. <br /> • Creativity Fostered: Promotes
            sensory exploration and early concept of change. <br /> • Theory
            Link: Engages tactile-based discovery aligned with Bruner’s sensory
            schema (Bruner, 1961).
          </p>
          <h5>2. Light Play with Mirrors</h5>
          <p>
            • Description: Babies observe reflected light using safe mirrors and
            flashlights.
            <br />• Creativity Fostered: Builds visual tracking and
            understanding of cause-effect. <br />• STEAM Link: Integrates
            science with aesthetic awareness (Liu et al., 2023).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>2–3 Years: Simple Experiments</h1>
          <h5>1. Color Mixing</h5>
          <p>
            • Description: Mixing colored water to explore new shades. <br />•
            Creativity Fostered: Observation, prediction.
          </p>
          <h5>2. Sink or Float</h5>
          <p>
            • Description: Testing objects in water to see if they sink or
            float. <br />• Creativity Fostered: Hypothesis building, testing
            ideas.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img
            src="/assets/img/science5.jpeg"
            alt="Young children experimenting"
          />
        </div>
      </section>

      <section className="two-column">
        <div className="image">
          <img src="/assets/img/science6.jpeg" alt="Plant growth experiment" />
        </div>
        <div className="content">
          <h1>3–5 Years: Hands-on Investigations</h1>
          <h5>1. Planting Seeds</h5>
          <p>
            • Description: Observing plant growth over time. <br />• Creativity
            Fostered: Patience, documentation, cause-effect.
          </p>
          <h5>2. Shadow Play</h5>
          <p>
            • Description: Using light sources to make and change shadows.{" "}
            <br />• Creativity Fostered: Exploration of light, shape, and size.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>6–8 Years: Advanced Projects</h1>
          <h5>1. Simple Circuits</h5>
          <p>
            • Description: Building a basic circuit with batteries and bulbs.{" "}
            <br />• Creativity Fostered: Understanding energy flow and design
            thinking.
          </p>
          <h5>2. DIY Volcano</h5>
          <p>
            • Description: Creating a baking soda and vinegar eruption. <br />•
            Creativity Fostered: Chemistry basics and dramatic demonstration.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img
            src="/assets/img/science7.jpeg"
            alt="Volcano science experiment"
          />
        </div>
      </section>
    </div>
  );
}
