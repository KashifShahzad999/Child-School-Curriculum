import React from "react";
import "./Mathematics.css";

export default function Mathematics() {
  return (
    <div className="technologies-page">
      <h1 className="main-heading">Mathematics and Numeracy</h1>

      {/* Section 1 */}
      <section className="two-column">
        <div className="content">
          <h1>Importance of Mathematics and Numeracy in Creativity</h1>
          <p>
            Mathematics in early childhood is not confined to rote counting or
            memorization. It involves recognizing patterns, making comparisons,
            exploring spatial relationships, and solving problems through
            creative reasoning. When integrated into playful, real-life
            contexts, mathematical thinking becomes a powerful tool for inquiry
            and innovation. Through songs, manipulatives, and digital
            exploration, children engage deeply with numeracy concepts,
            developing confidence and curiosity. Dienes’ theory emphasizes
            meaningful variation and playful abstraction, while Piaget’s work
            situates mathematics within the child’s cognitive developmental
            stages (Bálint, 2024; Oh & Kim, 2021).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/math1.jpeg" alt="Children learning numbers" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/math2.jpeg" alt="Kids with math blocks" />
        </div>
        <div className="content">
          <h1>Theoretical Foundations</h1>
          <p>
            <strong>Dienes’ Theory of Learning Mathematics</strong> advocates
            for structured variation and multiple representations to build
            conceptual understanding. He emphasized that young children learn
            best through{" "}
            <strong>
              enactive (doing), iconic (seeing), and symbolic (thinking)
            </strong>{" "}
            stages (Oh & Kim, 2021). Games, blocks, and physical manipulation of
            numbers help children form abstract mathematical ideas through play.
          </p>
          <p>
            <strong>
              Piaget’s Theory of Logical-Mathematical Development
            </strong>{" "}
            explains how children construct number sense and operations through
            sensorimotor and preoperational experiences. Concepts like
            conservation, seriation, and classification emerge as children
            manipulate their environment, make predictions, and resolve
            contradictions.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      {/* Section 3 */}
      <section className="two-column">
        <div className="content">
          <h1>Resources, Materials, and Digital Technologies</h1>
          <h6>Traditional Tools:</h6>
          <ul>
            <li>Pattern blocks, attribute buttons</li>
            <li>Counting songs and finger rhymes</li>
            <li>Measuring tapes, scales, abacuses</li>
          </ul>
          <h6>Recycled/Found Materials:</h6>
          <ul>
            <li>Socks, bottle caps, paper clips for sorting and grouping</li>
            <li>Egg cartons for 1:1 correspondence</li>
            <li>Pebbles and leaves for outdoor numeracy trails</li>
          </ul>
          <h6>Digital Technologies:</h6>
          <ul>
            <li>
              <strong>Apps:</strong> Moose Math, Numberblocks, DragonBox Numbers
            </li>
            <li>Interactive whiteboards for pattern-making</li>
            <li>Digital manipulatives (e.g., virtual base ten blocks)</li>
            <li>Math journaling using tablets or drawing apps</li>
          </ul>
          <button className="cta-btn">Learn More</button>
        </div>

        <div className="image">
          <img src="/assets/img/math3.jpeg" alt="Math learning tools" />
        </div>
      </section>

      {/* Age group sections */}
      <section className="two-column">
        <div className="image">
          <img src="/assets/img/math4.jpeg" alt="Toddlers counting blocks" />
        </div>
        <div className="content">
          <h1>Learning Experiences by Age Group</h1>
          <h6>0–2 Years</h6>
          <h5>1. Number Songs and Clapping</h5>
          <p>
            Description: Children sing songs like “Five Little Ducks” with
            claps, finger puppets, or gestures. <br />
            Creativity Fostered: Builds auditory sequencing and rhythm-based
            number memory. <br />
            Theory Link: Enactive learning supports number representation
            (Dienes, 1960).
          </p>
          <h5>2. Shape Sorting</h5>
          <p>
            Description: Using basic shapes or containers, children sort by
            size, shape, or color. <br />
            Creativity Fostered: Develops classification and early logic. <br />
            Theory Link: Supports emerging schematic categorization (Piaget,
            1952).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      {/* 2–3 Years */}
      <section className="two-column">
        <div className="content">
          <h1>2–3 Years: First Math Play</h1>
          <h5>1. Sorting Socks by Colour or Size</h5>
          <p>
            Description: Children match socks into pairs based on attributes.
            <br />
            Creativity Fostered: Builds pattern recognition and attribute
            sorting. <br />
            Theory Link: Iconic learning builds understanding of sameness and
            difference (Dienes; Oh & Kim, 2021).
          </p>
          <h5>2. Counting Steps or Snacks</h5>
          <p>
            Description: Children count aloud while walking stairs or sharing
            snacks. <br />
            Creativity Fostered: Links real-life routines with numerical
            language.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
        <div className="image">
          <img src="/assets/img/math5.png" alt="Kids doing math activities" />
        </div>
      </section>

      {/* 3–5 Years */}
      <section className="two-column">
        <div className="image">
          <img
            src="/assets/img/math6.jpeg"
            alt="Children using math manipulatives"
          />
        </div>
        <div className="content">
          <h1>3–5 Years: Explore & Create</h1>
          <h5>1. Pattern Walks</h5>
          <p>
            Description: Children identify repeating patterns (e.g., tiles,
            leaves) during outdoor walks. <br />
            Creativity Fostered: Visual-spatial creativity and prediction
            skills. <br />
            Theory Link: Abstract patterns emerge through experience and
            repetition (Bálint, 2024).
          </p>
          <h5>2. Math Collage</h5>
          <p>
            Description: Children use buttons or paper shapes to create
            symmetrical or patterned artworks. <br />
            Creativity Fostered: Blends aesthetics with geometric reasoning.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      {/* 6–8 Years */}
      <section className="two-column">
        <div className="content">
          <h1>6–8 Years: Advanced Math Projects</h1>
          <h5>1. Math Scavenger Hunt</h5>
          <p>
            Description: Children find and document math concepts in the
            environment (e.g., “find 3 triangles,” “find something half full”).
            <br />
            Creativity Fostered: Applies mathematical thinking in real-world
            contexts. <br />
            Theory Link: Builds symbolic understanding and logical abstraction
            (Piaget, 1952).
          </p>
          <h5>2. Digital Number Stories</h5>
          <p>
            Description: Using an app like Book Creator, children write and
            illustrate their own math problems. <br />
            Creativity Fostered: Combines narrative thinking with numeracy
            logic.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
        <div className="image">
          <img src="/assets/img/math5.png" alt="Child solving math puzzle" />
        </div>
      </section>


      <section className="video-section" style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px 0" }}>
  <video
    width="320"
    height="240"
    controls
    src="/assets/img/vedio12.mp4"
    type="video/mp4"
  >
    Your browser does not support the video tag.
  </video>

  <video
    width="320"
    height="240"
    controls
    src="/assets/img/vedio13.mp4"
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
