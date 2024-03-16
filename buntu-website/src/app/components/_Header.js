const Header = () => {
  {
    /* <!-- Topbar Start --> */
  }
  <div className="container-fluid bg-light p-0">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-map-marker-alt text-primary me-2"></small>
          <small>123 Karen, Nairobi, Kenya</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="far fa-clock text-primary me-2"></small>
          <small>Local Time</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-phone-alt text-primary me-2"></small>
          <small>BuntuLabs Contact</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-0" href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-0" href="">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>;
  {
    /* <!-- Topbar End --> */
  }

  {
    /* <!-- Navbar Start --> */
  }
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <a
      href="index.html"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">LOGO</h2>
      <Image src="" />
    </a>
    <Button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon"></span>
    </Button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="#" className="nav-item nav-link active">
          Home
        </a>
        <a href="#" className="nav-item nav-link">
          About
        </a>
        <a href="#" className="nav-item nav-link">
          Services
        </a>
        <a href="#" className="nav-item nav-link">
          Projects
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu fade-up m-0">
            <a href="#" className="dropdown-item">
              Products
            </a>
            <a href="#" className="dropdown-item">
              Our Team
            </a>
            <a href="#" className="dropdown-item">
              Testimonials
            </a>
            <a href="#" className="dropdown-item">
              Our Works
            </a>
          </div>
        </div>
        <a href="#" className="nav-item nav-link">
          Contact
        </a>
      </div>
      <a href="#" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Hire Us<i className="fa fa-arrow-right ms-3"></i>
      </a>
    </div>
  </nav>;
};

export default Header;
