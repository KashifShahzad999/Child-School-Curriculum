import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fdf6e3",
      }}
    >
      {/* Hero Section */}

      <section className="two-column">
        {/* Left side - Content */}
        <div className="content">
          <h1>Facilitating Creativity in the Early Childhood Curriculum</h1>
          <p>
            Creativity is not just an artistic luxury but a fundamental capacity
            that underpins children’s cognitive, social and emotional growth. In
            early childhood contexts, facilitating creativity means nurturing
            children’s innate curiosity, encouraging experimentation, and
            providing a scaffolded environment where original ideas can emerge
            and flourish. Grounded in constructivist and sociocultural theories
            (Piaget, 1952; Vygotsky, 1978), a creative curriculum balances
            child-initiated exploration with teacher-supported guidance,
            ensuring that learners both lead their own inquiries and benefit
            from expert modelling. Creativity is essential in early curricula as
            it drives critical thinking, problem-solving, and engagement.
            Research shows that arts-integrated schools experience a 10 % boost
            in student achievement across subjects (DeMoss & Morris, 2002).
            Furthermore, each unit increase in arts integration yields reading
            gains of up to 1.32 points and math gains of 1.08 points among
            elementary students, with particularly strong effects for low-SES
            and English-language learners (Catterall, 2009). Peer-group
            creativity also predicts academic success: a one-standard-deviation
            rise in classmates’ divergent thinking correlates with a 6.2–7.6 %
            increase in performance (Hohmann, 2010). Embedding creative
            practices from the earliest ages establishes a foundation for
            lifelong learning (Robinson, 2011).
          </p>
          <button className="cta-btn">Learn More</button>
        </div>

        {/* Right side - Image */}
        <div className="image">
          <img src="/assets/img/download.jpeg" alt="School Building" />
        </div>
      </section>

      <section className="two-column">
        {/* Left side - Content */}
        <div className="image">
          <img src="/assets/img/IMG_0839-scaled.webp" alt="School Building" />
        </div>

        {/* Right side - Image */}

        <div className="content">
          {/* <h1>Facilitating Creativity in the Early Childhood Curriculum</h1> */}
          <p>
            At its core, creativity involves producing something that is both
            novel and meaningful (Torrance, 1974). Csikszentmihalyi’s notion of
            “flow” highlights how deep engagement arises when challenge and
            skill align, a state that educators can cultivate by offering
            open-ended tasks tailored to each developmental stage. Gardner’s
            Multiple Intelligences framework reminds us that creativity
            manifests across domains—visual, kinesthetic, linguistic, social and
            logical—so a truly integrated curriculum must span art, drama,
            movement, music, language and literacy, mathematics and numeracy,
            humanities and social sciences, technologies and science, as well as
            interdisciplinary approaches such as STEM, STEAM, STREAM and STEMIE.
            This website is structured to guide early childhood teachers
            through: Art: Using rich materials and digital tools to foster
            aesthetic awareness, fine motor skills and self-expression. Drama &
            Puppetry: Harnessing role-play and storytelling to build language,
            social understanding and symbolic thought. Movement & Music: Tapping
            into the body’s wisdom to develop rhythm, coordination and creative
            embodiment. Language & Literacy: Crafting authentic contexts for
            narrative creation, emergent writing and multiliteracy practices.
            Mathematics & Numeracy: Designing playful investigations that spark
            number sense, spatial reasoning and pattern recognition. Humanities
            & Social Sciences: Encouraging inquiry into community, culture and
            identity through projects and discussions. Technologies & Science:
            Integrating hands-on investigations and digital investigations to
            promote design thinking and scientific literacy. Integrated
            Curriculum (STEM, STEAM, STREAM, STEMIE): Merging disciplines for
            holistic problem-solving, innovation and real-world application. The
            page is read with theory, resources, materials (such as digital
            technologies), and age-appropriate learning experiences to 0-2, 2-3,
            3-5 and 6-8 years old. They all sum up together to make a unified
            plan of how to design imaginative curriculums that answer the growth
            requirements of the children, reward their various successes, and
            equip them to be independent, critical and collaborative learners.
            Note : Need high definition images to Make page attractive
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>
    </div>
  );
}
