import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../data/posts.json";

// كل كاتب بيظهر مرة واحدة، من بيانات المقالات
const authors = [...new Map(data.posts.map((p) => [p.author.name, p.author])).values()];

const stats = [
  { icon: "bi-book-half", value: "15+", label: "تصنيف" },
  { icon: "bi-pen-fill", value: "50+", label: "كاتب خبير" },
  { icon: "bi-newspaper", value: "500+", label: "مقالة منشورة" },
  { icon: "bi-people-fill", value: "+2مليون", label: "قارئ شهرياً" },
];

const values = [
  { icon: "bi-bullseye", title: "الجودة أولاً", desc: "محتوى مدروس ومكتوب بخبرة" },
  { icon: "bi-lightning-charge-fill", title: "تركيز عملي", desc: "أمثلة واقعية يمكنك تطبيقها اليوم" },
  { icon: "bi-chat-heart-fill", title: "المجتمع", desc: "تعلم مع آلاف المصورين" },
  { icon: "bi-arrow-repeat", title: "دائماً محدث", desc: "أحدث الاتجاهات وأفضل الممارسات" },
];

export default function About() {
  return (
    <>
      <section className="hero section text-center">
        <Container>
          <span className="pill mb-4">من نحن</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)" }}>
            مهمتنا هي <span className="text-amber">الإعلام والإلهام</span>
          </h1>
          <p className="text-muted-2 fs-6 mx-auto my-4" style={{ maxWidth: 780, lineHeight: 2 }}>
            مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
            {stats.map((s) => (
              <div key={s.label} className="stat-box" style={{ minWidth: 210, padding: "1.6rem 1rem" }}>
                <i className={`bi ${s.icon}`}></i>
                <strong>{s.value}</strong>
                <small className="text-muted-2">{s.label}</small>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" style={{ background: "#121212", borderTop: "1px solid var(--border)" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title title-bars">قيمنا</h2>
            <p className="text-muted-2">المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>
          <Row className="g-3 justify-content-center">
            {values.map((v) => (
              <Col key={v.title} xs={6} lg={3}>
                <div className="card-dark value-card h-100">
                  <i className={`bi ${v.icon}`}></i>
                  <h3 className="h6 fw-bold mt-2 mb-2">{v.title}</h3>
                  <small className="text-muted-2">{v.desc}</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="text-center mb-5">
            <span className="pill mb-3">فريقنا</span>
            <h2 className="section-title">تعرف على كتابنا</h2>
            <p className="text-muted-2">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
          </div>
          <Row className="g-4">
            {authors.map((a) => (
              <Col key={a.name} md={6} lg={4}>
                <div className="card-dark team-card text-center">
                  <div className="team-avatar">
                    <img src={a.avatar} alt={a.name} />
                    <span className="team-check"><i className="bi bi-check-lg"></i></span>
                  </div>
                  <h3 className="h6 fw-bold mt-3 mb-1">{a.name}</h3>
                  <div className="small mb-3" style={{ color: "var(--orange)" }}>{a.role}</div>
                  <div className="d-flex justify-content-center gap-2">
                    {["linkedin", "github", "twitter-x"].map((s) => (
                      <a key={s} href="#" className="social-btn social-sm" aria-label={s}>
                        <i className={`bi bi-${s}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-band text-center">
        <Container>
          <h2 className="fw-bold mb-3">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="mx-auto mb-4" style={{ maxWidth: 680, opacity: .92 }}>
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:hello@adasah.com" className="btn btn-dark-solid"><i className="bi bi-envelope ms-2"></i>تواصل معنا</a>
            <Link to="/blog" className="btn btn-outline-light-2">تصفح المقالات</Link>
          </div>
        </Container>
      </section>
    </>
  );
}