import "../Styles/Contact.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loaderActive, setLoaderActive] = useState("");
  const [checkActive, setCheckActive] = useState("");
  const [contactForm, setContactForm] = useState(initialState);

  useEffect(() => {
    console.log("ran code");
    if (contactForm.message.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    if (error.length < 1) {
      setError("");
    } else if (
      contactForm.name.trim() === "" &&
      contactForm.email.trim() === ""
    ) {
      setError("Please fill all fields!");
    } else if (contactForm.name.trim() === "" && error.length) {
      setError("Please enter your name");
    } else if (contactForm.message.trim() === "") {
      setError("Please enter a message to send");
    } else if (contactForm.email.trim() === "") {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  }, [contactForm]);

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name.trim() === "" && contactForm.email.trim() === "") {
      setError("Please fill all fields!");
    } else if (contactForm.name.trim() === "") {
      setError("Please enter your name");
    } else if (contactForm.message.trim() === "") {
      setError("Please enter a message to send!");
    } else if (
      contactForm.email.trim().includes("@") &&
      contactForm.email.trim().includes(".")
    ) {
      sendEmail();
      setLoaderActive("active");
      setTimeout(() => setCheckActive("active"), 1800);
      setContactForm(initialState);
    } else {
      setError("Please enter a valid email address");
    }
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
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
        Questions? Interested in working together?
      </p>
      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Email"
          type="text"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
          value={contactForm.message}
          onChange={handleChange}
        />
        <div className="submit-wrap">
          <p className="error-message">{error}</p>
          <input disabled={disabled} type="submit" value="Send" />
        </div>
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
