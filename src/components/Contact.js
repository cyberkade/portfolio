import "../Styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loaderActive, setLoaderActive] = useState("");
  const [checkActive, setCheckActive] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gqqe92g",
        "template_cgph3yc",
        form.current,
        "AC81eCAtcE-xrywRn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <p className="title">Contact</p>
      <div className="header-bar contact" />
      <p style={{ fontWeight: "bold", color: "#257cb6" }}>
        Questions? Interested in working together? Don't be shy!
      </p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="username" />
        <input placeholder="Enter Email" type="email" name="user_email" />
        <textarea placeholder="Your Message" type="text" name="message" />
        <input onClick={() => {}} type="submit" value="Send" />
        <div className={`loader ${loaderActive}`}>
          <div className={`check ${checkActive}`}>
            <span className="check-one"></span>
            <span className="check-two"></span>
          </div>
        </div>
      </form>
      {/* <div className="contact-form">
        <input placeholder="Name" />
        <input placeholder="Enter Email" />
        <input placeholder="Your Message" />
      </div> */}
    </section>
  );
};
export default Contact;
