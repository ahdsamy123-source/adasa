import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const links = [
  { label: "الرئيسية", to: "/", end: true },
  { label: "المدونة", to: "/blog" },
    { label: "من نحن", to: "/about" }
];

export default function Navbar() {
  return (
    <BsNavbar expand="lg" variant="dark" sticky="top" className="site-nav py-3">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
           <img src="/logo-GdqARQRt.png" alt="عدسة" className="logo-img" />          <span>
            <span className="d-block fw-bold lh-1">عدسة</span>
            <small className="text-amber" style={{ fontSize: ".7rem" }}>عالم التصوير الفوتوغرافي</small>
          </span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav" className="justify-content-between">
          <Nav className="nav-pills-wrap mx-lg-auto my-3 my-lg-0">
            {links.map((l) => (
              <Nav.Link key={l.label} as={NavLink} to={l.to} end={l.end}>
                {l.label}
              </Nav.Link>
            ))}
            {/* <Nav.Link href="/about">من نحن</Nav.Link> */}
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <button className="btn text-muted-2" aria-label="بحث"><i className="bi bi-search"></i></button>
            <Link to="/blog" className="btn btn-orange">ابدأ القراءة</Link>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
