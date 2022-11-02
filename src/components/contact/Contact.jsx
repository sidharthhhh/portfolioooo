import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_auz2rfk",
      "template_mru4hqq",
      form.current,
      "098Box8CHcMLTptJu"
    );
    // douptttttttttt

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div id="cardCover">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>swayam1044@gamil.com</h5>
              <a href="mailto:swayam1044@gmail.com" target="_blank">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messanger</h4>
              <h5>swayam1044@gamil.com</h5>
              <a href="https://www.facebook.com/" target="_blank">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>6207822090</h5>
              <a href="https://web.whatsapp.com/" target="_blank">
                send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail} >
            <input
              type="text"
              name="name"
              placeholder="your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="your message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
