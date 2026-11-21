import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const explore = [
  { label: "الرئيسية", to: "/" },
  { label: "المدونة", to: "/blog" },
  { label: "من نحن", to: "/about" },
];
const categories = ["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"];
const socials = ["youtube", "linkedin", "github", "twitter-x"];

export default function Footer() {
  return (
    <footer className="site-footer pt-5">
      <Container>
        <Row className="g-5 pb-5">
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="logo-box">ع</span>
              <strong>عدسة</strong>
            </div>
            <p className="text-muted-2 small">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="d-flex gap-2">
              {socials.map((s) => (
                <a key={s} href="#" className="social-btn" aria-label={s}><i className={`bi bi-${s}`}></i></a>
              ))}
            </div>
          </Col>

          <Col xs={6} lg={2}>
            <h6 className="footer-title mb-4">استكشف</h6>
            <ul className="list-unstyled small d-grid gap-3">
              {explore.map((x) => <li key={x.label}><Link to={x.to}>{x.label}</Link></li>)}
            </ul>
          </Col>

          <Col xs={6} lg={2}>
            <h6 className="footer-title mb-4">التصنيفات</h6>
            <ul className="list-unstyled small d-grid gap-3">
              {categories.map((x) => <li key={x}><a href="#">{x}</a></li>)}
            </ul>
          </Col>

          <Col lg={4}>
            <h6 className="footer-title mb-3">ابق على اطلاع</h6>
            <p className="text-muted-2 small">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <Form onSubmit={(e) => e.preventDefault()} className="d-grid gap-3">
              <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" className="input-dark" />
              <Button type="submit" className="btn-orange">اشترك</Button>
            </Form>
          </Col>
        </Row>

        <div className="border-top py-4 d-flex flex-wrap justify-content-between gap-2 small text-muted-2" style={{ borderColor: "var(--border)" }}>
          <span>© 2026 عدسة. صنع بكل <i className="bi bi-heart-fill text-danger"></i> جميع الحقوق محفوظة.</span>
          <span className="d-flex gap-3">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">شروط الخدمة</a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
