

const Footer = () => {
  return (
    <footer className=" py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <p>
              We are a non-profit organization dedicated to promoting blood
              donation and saving lives.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Donate Blood
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt me-2"></i>123 Main Street,
                City, State
              </li>
              <li>
                <i className="fas fa-phone me-2"></i>+1 (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i>info@blooddonation.org
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Blood Donation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;