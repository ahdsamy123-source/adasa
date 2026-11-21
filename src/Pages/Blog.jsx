import { useMemo, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import data from "../data/Posts.json";
import { fmtDate } from "../utils/format.js";

const articles = data.posts;
const categories = data.categories.map((c) => c.name);

const PER_PAGE = 6;

function ArticleCard({ a, list }) {
  return (
    <article className={`card-dark h-100 ${list ? "d-md-flex flex-row" : "d-flex flex-column"}`}>
      <div className="position-relative blog-thumb">
        <img className="post-img" src={a.image} alt={a.title} />
        <span className="post-cat">{a.category}</span>
      </div>
      <div className="p-3 d-flex flex-column flex-grow-1">
        <small className="text-muted-2 mb-2">{fmtDate(a.date)} • {a.readTime}</small>
        <h3 className="h6 fw-bold">{a.title}</h3>
        <p className="text-muted-2 small">{a.excerpt}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
          <div className="d-flex align-items-center gap-2">
            <img className="avatar" src={a.author.avatar} alt={a.author.name} />
            <div className="lh-sm">
              <div className="small fw-semibold">{a.author.name}</div>
              <small className="text-muted-2">{a.author.role}</small>
            </div>
          </div>
          <a href="#" className="arrow-btn" aria-label="اقرأ المقال"><i className="bi bi-chevron-left"></i></a>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [cat, setCat] = useState("الكل");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [list, setList] = useState(false);

  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          (cat === "الكل" || a.category === cat) &&
          (a.title + a.excerpt).includes(query.trim())
      ),
    [cat, query]
  );

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const changeCat = (c) => { setCat(c); setPage(1); };
  const changeQuery = (v) => { setQuery(v); setPage(1); };

  return (
    <>
      <header className="blog-header text-center">
        <Container>
          <span className="pill mb-3"><i className="bi bi-journal-text ms-1"></i> مدونتنا</span>
          <h1 className="section-title">استكشف <span className="text-amber">مقالاتنا</span></h1>
          <p className="text-muted-2 mb-0">اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الحديث</p>
        </Container>
      </header>

      <div className="filter-bar">
        <Container className="d-flex flex-wrap justify-content-between align-items-center gap-3 py-3">
          <div className="position-relative search-box">
            <i className="bi bi-search"></i>
            <Form.Control
              type="search"
              placeholder="ابحث في المقالات..."
              value={query}
              onChange={(e) => changeQuery(e.target.value)}
              className="input-dark"
            />
          </div>
          <div className="d-flex flex-wrap gap-2">
            {["الكل", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => changeCat(c)}
                className={`chip ${cat === c ? "active" : ""}`}
              >
                {c === "الكل" ? "جميع المقالات" : c}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <small className="text-muted-2">عرض <strong className="text-white">{filtered.length}</strong> مقالات</small>
          <div className="view-toggle">
            <button className={list ? "active" : ""} onClick={() => setList(true)} aria-label="قائمة"><i className="bi bi-list"></i></button>
            <button className={!list ? "active" : ""} onClick={() => setList(false)} aria-label="شبكة"><i className="bi bi-grid-fill"></i></button>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="text-center text-muted-2 py-5">لا توجد مقالات مطابقة. جرّب كلمة بحث أخرى أو اختر تصنيف آخر.</p>
        ) : (
          <Row className="g-4">
            {visible.map((a) => (
              <Col key={a.id} md={list ? 12 : 6} lg={list ? 12 : 4}>
                <ArticleCard a={a} list={list} />
              </Col>
            ))}
          </Row>
        )}

        {pages > 1 && (
          <nav className="text-center mt-5" aria-label="الصفحات">
            <div className="d-inline-flex gap-2">
              <button className="page-btn" disabled={current === 1} onClick={() => setPage(current - 1)} aria-label="السابق"><i className="bi bi-chevron-right"></i></button>
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button key={n} className={`page-btn ${n === current ? "active" : ""}`} onClick={() => setPage(n)}>{n}</button>
              ))}
              <button className="page-btn" disabled={current === pages} onClick={() => setPage(current + 1)} aria-label="التالي"><i className="bi bi-chevron-left"></i></button>
            </div>
            <div className="small text-muted-2 mt-3">صفحة {current} من {pages}</div>
          </nav>
        )}
      </Container>
    </>
  );
}