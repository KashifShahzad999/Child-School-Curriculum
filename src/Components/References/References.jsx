import React from "react";
import "./HeartReferences.css";

export default function References() {
  const references = [
    {
      title: "Early Childhood STEAM Framework",
      author: "Ramesh, 2025",
      link: "#",
      note: "Overview of integrated STEAM practices for young learners."
    },
    {
      title: "Digital Play Theory",
      author: "Marsh, 2010",
      link: "#",
      note: "How children engage with digital tools as play."
    },
    {
      title: "Multiple Intelligences in Practice",
      author: "Gardner, 1983",
      link: "#",
      note: "Applying varied modalities in early learning."
    },
    {
      title: "Inquiry-Based Learning for Kids",
      author: "Bruner, 1961",
      link: "#",
      note: "Designing discovery-led science and project work."
    }
    // add more references as needed
  ];

  return (
    <div className="heartref-page">
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-heart" aria-hidden="true" />
          <h1 className="hero-title">References & Credits</h1>
          <p className="hero-sub">
            A small library of sources and inspirations used across this site.
            Thank you to all authors, educators and contributors.
          </p>
        </div>
      </div>

      <main className="content-wrap">
        <section className="ref-grid">
          {references.map((r, idx) => (
            <article key={idx} className="ref-card">
              <div className="ref-card-left">
                <div className="small-heart" aria-hidden="true" />
              </div>
              <div className="ref-card-body">
                <h3 className="ref-title">{r.title}</h3>
                <p className="ref-author">{r.author}</p>
                <p className="ref-note">{r.note}</p>
                <a className="ref-link" href={r.link} target="_blank" rel="noreferrer">
                  View source
                </a>
              </div>
            </article>
          ))}
        </section>

        <aside className="side-box">
          <h2>How to cite</h2>
          <p>
            Use the author-year format and link back to the original resource.
            Example: <em>Ramesh (2025). Integrated Curriculum for Early Years.</em>
          </p>

          <div className="thanks">
            <span className="thanks-heart" aria-hidden="true" />
            <p>With ❤️ — your curriculum team</p>
          </div>
        </aside>
      </main>

      <footer className="hr-footer">
        <p>Want to add a reference? Email <a href="mailto:you@example.com">you@example.com</a></p>
      </footer>
    </div>
  );
}
