import React, { useRef} from "react";
import GetTouch from "./GetTouch";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyx68f3', 'template_ytqcx9f', form.current, 'buauz1uVcwKoRG5pJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="sectionContact overflow-hidden">
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="navbarContact">
          <NavBar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Contact Us</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title contact-title">
                <span>Contact Us</span>
                <h2>GET IN TOUCH</h2>
              </div>
              <div className="contact-widget">
                <div className="cw-text">
                  <i className="fa fa-map-marker"></i>
                  <p className="map-p">
                    333 Middle Winchendon Rd, Rindge,
                    <br /> NH 03461
                  </p>
                </div>
                <div className="cw-text list-mobile-container">
                  <i className="fa-solid fa-mobile-button fa-mobile-design"></i>
                  <ul className="list-mobile">
                    <li>125-711-811</li>
                    <li>125-668-886</li>
                  </ul>
                </div>
                <div className="cw-text email">
                  <i className="fa fa-envelope fa-envelope-design"></i>
                  <p className="email-p">Support.gymcenter@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 columnContact">
              <div className="leave-comment">
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" placeholder="Name" name="user_name" />
                  <input type="email" placeholder="Email" name="user_email" />
                  <textarea placeholder="Comment" name="message" />
                  <input className="ContactBtn" type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5149357420805!2d35.47749557449329!3d33.902144325643185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16d4ece1ecdd%3A0xa0890fe9b306a74a!2sCharles%20W.%20Hostler%20Student%20Center!5e0!3m2!1sen!2slb!4v1681284564922!5m2!1sen!2slb" 
              width="600" 
              height="550"
              style={{ border: "0" }} 
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="getTouchContact">
        <GetTouch />
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
