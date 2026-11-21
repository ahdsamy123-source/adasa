import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../data/Posts.json";
import { fmtDate } from "../utils/format.js";

const articles = data.posts;
const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
const latestArticles = articles
  .filter((a) => !a.featured)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

const categoryIcons = {
  "إضاءة": "bi-brightness-high-fill",
  "بورتريه": "bi-person-fill",
  "مناظر طبيعية": "bi-image-fill",
  "تقنيات": "bi-sliders",
  "معدات": "bi-gear-fill",
};
const categoryCards = data.categories.map((c) => ({
  name: c.name,
  icon: categoryIcons[c.name] || "bi-tag-fill",
  count: articles.filter((a) => a.category === c.name).length,
}));

const stats = [
  { icon: "bi-newspaper", value: "50+", label: "مقالة" },
  { icon: "bi-people-fill", value: "+10 ألف", label: "قارئ" },
  { icon: "bi-folder2-open", value: "4", label: "تصنيفات" },
  { icon: "bi-pen-fill", value: "6", label: "كاتب" },
];

function Hero() {
  return (
    <section id="home" className="hero section text-center">
      <Container>
        <span className="pill mb-4">مرحباً بك في عدسة</span>
        <h1>اكتشف <span className="text-amber">فن</span><br />التصوير الفوتوغرافي</h1>
        <p className="text-muted-2 fs-5 mx-auto my-4" style={{ maxWidth: 640 }}>
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <Link to="/blog" className="btn btn-orange"><i className="bi bi-arrow-left ms-2"></i>استكشف المقالات</Link>
          <a href="#about" className="btn btn-outline-dark2"><i className="bi bi-info-circle ms-2"></i>اعرف المزيد</a>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <i className={`bi ${s.icon}`}></i>
              <strong>{s.value}</strong>
              <small className="text-muted-2">{s.label}</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedArticles() {
  return (
    <section className="section">
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="pill mb-3">مميز</span>
            <h2 className="section-title">مقالات مختارة</h2>
            <p className="text-muted-2 mb-0">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <Link to="/blog" className="btn btn-orange btn-sm">عرض الكل</Link>
        </div>
        <div className="d-grid gap-4">
          {featuredArticles.map((a) => (
            <article key={a.id} className="card-dark">
              <Row className="g-0">
                <Col md={7} className="p-4 d-flex flex-column justify-content-between order-2 order-md-1">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3 small text-muted-2">
                      <span className="cat-tag">{a.category}</span>
                      <span><i className="bi bi-clock"></i> {a.readTime}</span>
                    </div>
                    <h3 className="h4 fw-bold">{a.title}</h3>
                    <p className="text-muted-2 small">{a.excerpt}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex align-items-center gap-2">
                      <img className="avatar" src={a.author.avatar} alt={a.author.name} />
                      <div className="lh-sm">
                        <div className="small fw-semibold">{a.author.name}</div>
                        <small className="text-muted-2">{fmtDate(a.date)}</small>
                      </div>
                    </div>
                    <a href="#" className="small text-decoration-none" style={{ color: "var(--orange)" }}>
                      اقرأ المقال <i className="bi bi-arrow-left"></i>
                    </a>
                  </div>
                </Col>
                <Col md={5} className="position-relative order-1 order-md-2">
                  <span className="badge-feat"><i className="bi bi-star-fill"></i> مميز</span>
                  <img className="featured-img" src={a.image} alt={a.title} />
                </Col>
              </Row>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Categories() {
  return (
    <section className="section" style={{ background: "#121212" }}>
      <Container>
        <div className="text-center mb-5">
          <span className="pill mb-3">التصنيفات</span>
          <h2 className="section-title">استكشف حسب الموضوع</h2>
          <p className="text-muted-2">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <Row className="g-3">
          {categoryCards.map((c) => (
            <Col key={c.name} xs={6} lg={3}>
              <a href="#" className="card-dark cat-card d-block text-decoration-none text-white h-100">
                <div className="cat-icon"><i className={`bi ${c.icon}`}></i></div>
                <h3 className="h6 fw-bold mb-1">{c.name}</h3>
                <small className="text-muted-2">{c.count} مقالة</small>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function LatestArticles() {
  return (
    <section className="section">
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="pill mb-3">الأحدث</span>
            <h2 className="section-title">أحدث المقالات</h2>
            <p className="text-muted-2 mb-0">محتوى جديد طازج من المطبعة</p>
          </div>
          <Link to="/blog" className="text-decoration-none fw-semibold" style={{ color: "var(--orange)" }}>
            عرض جميع المقالات <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <Row className="g-4">
          {latestArticles.map((p) => (
            <Col key={p.id} md={6} lg={4}>
              <article className="card-dark h-100 d-flex flex-column">
                <div className="position-relative">
                  <img className="post-img" src={p.image} alt={p.title} />
                  <span className="post-cat">{p.category}</span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <small className="text-muted-2 mb-2">{fmtDate(p.date)} • {p.readTime}</small>
                  <h3 className="h6 fw-bold">{p.title}</h3>
                  <p className="text-muted-2 small">{p.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-auto" style={{ borderColor: "var(--border)" }}>
                    <div className="d-flex align-items-center gap-2">
                      <img className="avatar" src={p.author.avatar} alt={p.author.name} />
                      <div className="lh-sm">
                        <div className="small fw-semibold">{p.author.name}</div>
                        <small className="text-muted-2">{p.author.role}</small>
                      </div>
                    </div>
                    <a href="#" className="arrow-btn" aria-label="اقرأ المقال"><i className="bi bi-chevron-left"></i></a>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="about" className="section pt-0">
      <Container style={{ maxWidth: 860 }}>
        <div className="news-box text-center">
          <div className="news-icon"><i className="bi bi-envelope"></i></div>
          <h2 className="fw-bold">اشترك في <span className="text-amber">نشرتنا الإخبارية</span></h2>
          <p className="text-muted-2">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
          <Form onSubmit={(e) => e.preventDefault()} className="d-flex flex-wrap justify-content-center gap-2 my-4">
            <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" className="input-dark w-auto flex-grow-1" style={{ maxWidth: 360 }} />
            <Button type="submit" className="btn-orange">اشترك الآن</Button>
          </Form>
          <small className="text-muted-2">انضم لـ <strong className="text-white">+10,000</strong> مصور • بدون إزعاج • إلغاء الاشتراك في أي وقت</small>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
      <Newsletter />
    </>
  );
}