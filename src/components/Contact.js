import "../Styles/Contact.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = ({ contactRef }) => {
  const form = useRef();
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loaderActive, setLoaderActive] = useState("");
  const [checkActive, setCheckActive] = useState(false);
  const [contactForm, setContactForm] = useState(initialState);
  const [trollMsgActive, setTrollMsgActive] = useState(false);

  useEffect(() => {
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
      setLoaderActive(true);
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
          // console.log(result.text);
          setTimeout(() => setCheckActive(true), 1800);
          setContactForm(initialState);
        },
        (error) => {
          // console.log(error.text);
          setLoaderActive(false);
          if (!trollMsgActive) {
            setError(
              `Oops, the email failed to send. I'd say please try again but that probably won't work`
            );
            setTrollMsgActive(true);
          } else {
            setError(
              `Insanity is doing the same thing over and over and expecting different results. - Albert Einstein`
            );
          }
        }
      );
  };
  return (
    <section ref={contactRef} id="contact">
      <p className="title">Contact</p>
      <div className="header-bar contact-div" />
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
        {!loaderActive && (
          <div className="submit-wrap">
            <p className="error-message">{error}</p>
            <input disabled={disabled} type="submit" value="Send" />
          </div>
        )}
        <div className={`loader ${loaderActive ? "active" : ""}`}>
          <div className={`check ${checkActive ? "active" : ""}`}>
            <span className="check-one"></span>
            <span className="check-two"></span>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Contact;
