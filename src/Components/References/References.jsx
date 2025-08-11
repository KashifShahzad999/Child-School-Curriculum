import React from "react";
import "./References.css";

export default function HeartReferences() {
  const references = [
    {
      note: "Anderberg, S., & Kratochvil, K. (2005). Rationale for Creative Dramatics and Formal Theatre in the Classroom. San José State University. www2.sjsu.edu",
    },
    {
      note: "Aslanyan-rad, E. (2024) Development of WebQuest-based TPACK: Reconsidering Information & Communication Technologies. Available at: https://www.researchgate.net",
    },
    {
      note: "Bahtiar, R.S. et al. (2024) ‘Social inquiry learning model in improving elementary school students’ critical thinking skills’, Education and Human Development Journal. Available at: https://journal2.unusa.ac.id",
    },
    {
      note: "Bálint, Á. (2024) ‘Cultural foundations of a mathematician’s thinking: A psychobiographical exploration of Zoltán Paul Dienes and his cognitive development’, International Review of Psychiatry, Taylor & Francis. Available at: https://www.tandfonline.com",
    },
    {
      note: "Belda-Medina, J. and Calvo-Ferrer, J.R. (2022) ‘Integrating augmented reality in language learning: Pre-service teachers’ digital competence and attitudes through the TPACK framework’, Education and Information Technologies. Springer. Available at: https://link.springer.com",
    },
    {
      note: "Bruner, J.S. (1961) ‘The act of discovery’, Harvard Educational Review, 31(1), pp. 21–32.",
    },
    {
      note: "Dagienė, V. and Jasutė, E. (2018) Constructionism 2018. Available at: https://www.academia.edu",
    },
    {
      note: "Davis Jr, D.R. (2023) The impact of achievement from brain-based learning resources on primary grade students of Title I schools. search.proquest.com. Available at: https://search.proquest.com",
    },
    {
      note: "Dewey, J. (1934). Art as Experience. Minton, Balch & Company.",
    },
    {
      note: "Fernald, A., Marchman, V. A., & Weisleder, A. (2013). SES differences in language processing skill and vocabulary are evident at 18 months. Developmental Science, 16(2), 234–248. pubmed.ncbi.nlm.nih.gov",
    },
    {
      note: "Halliday, M.A.K. (1975) Learning How to Mean: Explorations in the Development of Language. Edward Arnold",
    },
    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },
    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },
    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },
    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },

    {
      note: "Han, M., Moore, V., Vukelich, C., & Buell, M. J. (2010). Does Play Make a Difference?: How play intervention affects the vocabulary learning of at-risk preschoolers. American Journal of Play, 3(1), 83–99. researchgate.net",
    },




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
                {/* <a className="ref-link" href={r.link} target="_blank" rel="noreferrer">
                  View source
                </a> */}
              </div>
            </article>
          ))}
        </section>

        <aside className="side-box">
          <h2>How to cite</h2>
          <p>
            Use the author-year format and link back to the original resource.
            Example:{" "}
            <em>Ramesh (2025). Integrated Curriculum for Early Years.</em>
          </p>

          <div className="thanks">
            <span className="thanks-heart" aria-hidden="true" />
            <p>With ❤️ — your curriculum team</p>
          </div>
        </aside>
      </main>

      <footer className="hr-footer">
        <p>
          Want to add a reference? Email{" "}
          <a href="mailto:you@example.com">you@example.com</a>
        </p>
      </footer>
    </div>
  );
}
