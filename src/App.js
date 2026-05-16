import "./styles.css";

import logo from "./logo.png";

import phone1 from "./phone1.jpeg";
import phone2 from "./phone2.jpeg";
import phone3 from "./phone3.jpeg";
import phone4 from "./phone4.jpeg";
import phone5 from "./phone5.jpeg";
import phone6 from "./phone6.jpeg";

import epabx1 from "./epabx1.jpeg";
import epabx2 from "./epabx2.jpeg";
import epabx3 from "./epabx3.jpeg";
import epabx4 from "./epabx4.jpeg";
import epabx5 from "./epabx5.jpeg";
import epabx6 from "./epabx6.jpeg";
import epabx7 from "./epabx7.jpeg";

export default function App() {
  const products = [
    "Panasonic Wireless Intercom",
    "Wireless Hot Line Extension",
    "Lift Phones",
    "Mascom EPABX Systems",
    "CCL EPABX Systems",
    "Wireless Intercom Systems",
    "HD Crystal CCTV Cameras",
    "Security & Surveillance Systems",
    "Telephone Accessories",
    "School Broadcast Systems",
    "Mobile Boosters",
    "Fix Cellular Terminals",
  ];

  const gallery = [
    phone1,
    phone2,
    phone3,
    phone4,
    phone5,
    phone6,

    epabx1,
    epabx2,
    epabx3,
    epabx4,
    epabx5,
    epabx6,
    epabx7,
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h2>Tannushree Enterprises</h2>
            <p>EPABX • Intercom • Security Solutions</p>
          </div>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Advanced Telecom
            <span> & Security Solutions</span>
          </h1>

          <p>
            Trusted manufacturer and supplier of EPABX Systems, Wireless
            Intercoms, CCTV Cameras, Lift Phones, Security Systems and Telecom
            Accessories since 2006.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Explore Products
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        <img src={phone1} alt="product" className="hero-image" />
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2>About Us</h2>

        <p>
          Established in 2006 in Delhi, Tannushree Enterprises is a trusted
          manufacturer, supplier, wholesaler and trader of EPABX Systems,
          Wireless Intercoms, Lift Phones, Security Systems, CCTV Cameras and
          telecom solutions.
        </p>

        <p>
          With years of expertise and the legacy of the Mascom EPABX brand, we
          provide reliable, durable and high-quality communication systems for
          businesses, institutions and homes.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="products">
        <h2>Our Products</h2>

        <div className="products-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" id="gallery">
        <h2>Product Gallery</h2>

        <div className="gallery-grid">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              className="gallery-image"
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact Details</h2>

        <div className="contact-box">
          <p>
            <strong>Name:</strong> Akhil Gambhir
          </p>

          <p>
            <strong>Phone:</strong> 9810074101
          </p>

          <p>
            <strong>Telephone:</strong> 011-41008090
          </p>

          <p>
            <strong>Email:</strong> tannushree247@rediffmail.com
          </p>

          <p>
            <strong>Address:</strong>
            <br />
            1178/12, Govindpuri,
            <br />
            Kalkaji, New Delhi - 110019
          </p>

          <a
            href="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&product=B0CQJZ3X2B&me=A23Q90C3TOT07X"
            target="_blank"
            className="amazon-btn"
          >
            Visit Amazon Store
          </a>
        </div>
      </section>
    </div>
  );
}
