import React from "react";
import "./Engineering.css";

export default function Engineering() {
  return (
    <div className="engineering-page">
      <h1 className="main-heading">Engineering</h1>

      {/* Section 1 */}
      <section className="two-column">
        <div className="content">
          <h1>Importance of Engineering in Creativity</h1>
          <p>
            Engineering in early childhood education fosters innovation,
            experimentation, and applied problem-solving. Through open-ended
            building tasks and material manipulation, children develop spatial
            reasoning, resilience, and design thinking. Engineering projects
            empower young learners to{" "}
            <strong>construct knowledge by doing</strong>, promoting
            independence and creative risk-taking. When introduced through play,
            engineering enhances both cognitive flexibility and fine motor
            development, especially when paired with real-world challenges. As
            Voon et al. (2022) argue, engineering experiences embedded in
            constructivist and problem-solving models enhance computational
            thinking and creative logic from the early years.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/Eng1.jpeg" alt="Children building projects" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/eng2.jpeg" alt="Early engineering design" />
        </div>
        <div className="content">
          <h1>Theoretical Foundations</h1>
          <p>
            <strong>Seymour Papert’s Constructionist Theory</strong> posits that
            learning is most effective when children build tangible objects in a
            meaningful context. Constructionism extends Piaget’s constructivism
            by emphasizing hands-on creation as a means of expressing internal
            understanding (Dagienė & Jasutė, 2018). In early engineering,
            children’s design activities—building bridges, pulleys, or marble
            runs—serve as both learning artifacts and cognitive blueprints.{" "}
            <br />
            <strong>Problem-Solving Models</strong> emphasize the iterative
            cycle of trial, error, reflection, and redesign. Vanderburg &
            Trotter (2021) highlight that engaging children in open-ended
            challenges builds not only reasoning skills but emotional
            resilience. These models empower learners to hypothesize,
            collaborate, troubleshoot, and persist through setbacks—hallmarks of
            creative engineering practice
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
            • Wooden and plastic blocks of various shapes <br /> • Interlocking
            bricks (e.g., LEGO, Duplo) <br /> • Wheels, pulleys, gears, ramps
            <br />
            <h6>Recycled/Found Materials:</h6>
            • Cardboard tubes, paper rolls, string for pulley systems <br /> •
            Bottle caps and boxes for vehicle design <br /> • Egg cartons and
            lids for balancing structures
            <br />
            <h6>Digital Tools:</h6> • TinkerCAD: 3D design tool for creating and
            testing models <br />• LEGO Spike / WeDo: Combines physical builds
            with digital programming <br />• Engineering story apps (e.g., The
            Cat in the Hat Builds That) <br /> • Virtual mlalrblle run
            simulators
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/Eng3.jpeg" alt="Engineering tools" />
        </div>
      </section>

      {/* Learning Experiences by Age Group */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/eng5.jpeg" alt="Toddlers building" />
        </div>
        <div className="content">
          <h1>Learning Experiences by Age Group</h1>
          <h6>0–2 Years</h6>
          <h5>1. Stack and Knock</h5>
          <p>
            • Description: Babies explore stacking blocks or containers and
            knocking them down. <br />
            • Creativity Fostered: Encourages sensory-motor planning,
            prediction, and cause-effect logic. <br /> • Theory Link: Direct
            experience of physical structures aligns with Papert’s
            constructionism (Dagienė & Jasutė, 2018).
          </p>
          <h5>2. Tunnel Crawling</h5>
          <p>
            • Description: Use cardboard boxes and cushions to create
            crawl-through engineering “mazes.” <br /> • Creativity Fostered:
            Enhances spatial reasoning and symbolic understanding of enclosure
            and passage.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>2–3 Years: First Constructions</h1>
          <h5>1. Build a Bridge Challenge</h5>
          <p>
            • Description: Using blocks or recycled materials, children attempt
            to build a bridge to hold a toy animal. <br /> • Creativity
            Fostered: Builds design logic, stability experimentation, and
            innovation. <br /> • Theory Link: Problem-solving through trial and
            error (Vanderburg & Trotter, 2021).
          </p>
          <h5>2. Pulley Play</h5>
          <p>
            • Description: Children use string, baskets, and fixed points to
            move small items up/down. <br /> • Creativity Fostered: Introduces
            mechanical thinking and sequential planning
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/eng4.jpeg" alt="Young children building" />
        </div>
      </section>

      <section className="two-column">
        <div className="image">
          <img src="/assets/img/eng6.jpeg" alt="Team building project" />
        </div>
        <div className="content">
          <h1>3–5 Years: Design and Build</h1>
          <h5>1. Block Town Design</h5>
          <p>
            • Description: Children collaboratively build a city using blocks,
            adding roads, signs, and landmarks. <br /> • Creativity Fostered:
            Encourages narrative design, negotiation, and function-form balance.{" "}
            <br />• Theory Link: Tangible creations as mental models of
            understanding (Papert, 1980).
          </p>
          <h5>2. Fix-It Station</h5>
          <p>
            • Description: Children disassemble and reassemble old toys or
            gadgets (safely). <br /> • Creativity Fostered: Develops spatial and
            mechanical intelligence.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      <section className="two-column">
        <div className="content">
          <h1>6–8 Years: Advanced Engineering Projects</h1>
          <h5>1. Tinker CAD House Project</h5>
          <p>
            • Description: Children digitally design a simple house or
            playground using TinkerCAD. <br /> • Creativity Fostered: Applies 3D
            modeling to real-world design; promotes iteration and visualization.{" "}
            <br />• Theory Link: Digital making aligned with Papert’s
            constructionist vision of learning (Dagienė & Jasutė, 2018).
          </p>
          <h5>2. Rube Goldberg Machine Design</h5>
          <p>
            • Description: Children design a chain reaction using dominoes,
            tubes, and ramps to complete a simple task. <br /> • Creativity Fostered:
            Integrates creative storytelling with mechanical logic and
            collaborative problem-solving.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/eng7.jpeg" alt="Child robotics project" />
        </div>
      </section>
    </div>
  );
}
