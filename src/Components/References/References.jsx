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
      note: "Harper, N.B. (2024) How principles of brain based learning are used in Title I high schools and its effect if any on student growth. search.proquest.com. Available at: https://search.proquest.com",
    },
    {
      note: "Howard, R., & Mayesky, M. (2022). Creative Activities and Curriculum for Young Children (12th ed.). Cengage Learning. au.cengage.com",
    },
    {
      note: "Hutagalung, F., Lai, L., & Adams, D. (2020). Effects of dramatic play on vocabulary learning among preschoolers in Kuala Lumpur. Journal of Nusantara Studies, 5(1), 294–314. https://doi.org/10.24200/jonus.vol5iss1pp294-314 journal.unisza.edu.my",
    },
    {
      note: "Imsallim, R., Abouhajar, N. and Imsallim, W. (2025) ‘Integrating the 5E instructional model with Vygotsky’s sociocultural theory’, Bani Waleed University Journal of Human and Applied Sciences. Available at: https://jhas-bwu.com",
    },

    {
      note: "Kellogg, D. and Li, F. (2021) ‘When three fives are thirty-five: Vygotsky in a Hallidayan idiom’, Early Years. Taylor & Francis.",
    },

    {
      note: "Lantolf, J.P., Xi, J. and Minakova, V. (2021) ‘Sociocultural theory and concept-based language instruction’, Language Teaching. C",
    },

    {
      note: "Liu, C.Y., Wu, C.J., Chien, Y.H., Tzeng, S.Y. and Lee, M.Y. (2023) ‘Examining the quality of art in STEAM learning activities’, Psychology of Aesthetics, Creativity, and the Arts. Available at: https://psycnet.apa.org",
    },

    {
      note: "Marsh, J. (2010) ‘Young children’s play in online virtual worlds’, Journal of Early Childhood Research, 8(1), pp. 23–39.",
    },

    {
      note: "Oh, M.Y. and Kim, N.G. (2021) ‘An analysis of example spaces constructed by students in learning the area of a trapezoid based on Dienes’ theory of learning mathematics’, Education of Primary School Mathematics. Available at: https://www.koreascience.kr",
    },

    {
      note: "Parajuli, D.R. (2023) Becoming a STEAM-based science educator: Intersecting science teacher identity and existing pedagogical practice in Nepal. Available at: https://elibrary.ku.edu.np",
    },

{
      note: "Piaget, J. (1951). Play, Dreams and Imitation in Childhood. London: Routledge & Kegan Paul.",
    },
{
      note: "Piaget, J. (1952). The Origins of Intelligence in Children. International Universities Press",
    },
{
      note: "Ramesh, M.R. (2025) ‘Promoting lifelong learning skills through STEAM: Integrative approaches for a dynamic future’, in Pathways to STEAM Integration in Modern Education. IGI Global. Available at: https://www.igi-global.com",
    },
    {
      note: "Retno, R.S., Purnomo, P., Hidayat, A. and Rahmawati, S. (2025) ‘Conceptual framework design for STEM-integrated project-based learning (PjBL-STEM) for elementary schools’, Asian Education and Development Studies. Available at: https://www.emerald.com",
    },
    {
      note: "Reddy, K.J., Hunjan, U. and Jha, P. (2021) ‘Brain-based learning method: Opportunities and challenges’, in Applications in Learning. Springer. Available at: https://link.springer.com",
    },
    {
      note: "Seon-Mi, S. and Kellogg, D. (2022) ‘Un-naming names: Using Vygotsky's language games and Halliday's grammar’, Early Years. Taylor & Francis.",
    },
    {
      note: "Thyssen, C. et al. (2023) ‘From TPACK to DPACK: The “Digitality-related pedagogical and content knowledge” model in STEM-education’, Education Sciences. Available at: https://www.mdpi.com",
    },
    {
      note: "Tombak, A. (2014). The importance of drama in pre-school education. Procedia – Social and Behavioral Sciences, 143, 372–378. s3-ap-southeast-1.amazonaws.com",
    },
    {
      note: "Tseng, J.J. et al. (2022) ‘A critical review of research on TPACK in language teaching’, Computer Assisted Language Learning. Taylor & Francis. Available at: https://www.tandfonline.com",
    },
    {
      note: "Vanderburg, R. and Trotter, P. (2021) ‘How constructivist theories of development can be used to re-conceptualise NAPLAN as an opportunity to develop student resilience’, Australian Journal of Teacher Education. Available at: https://search.informit.org",
    },
    {
      note: "Voon, X.P., Wong, S.L. and Wong, L.H. (2022) ‘Developing computational thinking competencies through constructivist argumentation learning: A problem-solving perspective’, International Journal of Science and Mathematics Education. Available at: https://repository.nie.edu.sg",
    },
    {
      note: "Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.",
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

        {/* <aside className="side-box">
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
        </aside> */}
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
