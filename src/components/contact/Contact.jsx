import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import call from "../../image/call.png";
import email from "../../image/email.png";
import gps from "../../image/gps.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {

  const theme = useContext(ThemeContext);
  const darkMode= theme.state.darkMode;

  const form = useRef();
  // Affichage envois du message iniatialise en faulse
  const [save, setSave] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_77z9gsa",
        "template_2ga3ox6",
        form.current,
        "user_HoAtD1QYC3PLVHfJDrQHS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSave(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const envoiMsg = save && "Message envoyer avec success!";

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contacter-Nous </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={call} alt="" className="c-icone" />
              +221 77 508 17 79
            </div>

            <div className="c-info-item">
              <img src={email} alt="" className="c-icone" />
              nkindoudieuveil@gmail.com
            </div>

            <div className="c-info-item">
              <img src={gps} alt="" className="c-icone" />
              Sacre coeur 3 vdn
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor?</b> sit amet consectetur adipisicing elit.
            Deleniti quae nisi magnam officiis necessitatibus? Nemo harum
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"  style={{backgroundColor: darkMode && "#333"}} required placeholder="Name" name="user_name" />

            <input type="text"  style={{backgroundColor: darkMode && "#333"}} required placeholder="Objet" name="user_objet" />

            <input style={{backgroundColor: darkMode && "#333"}} 
              type="email"
              required
              placeholder="email"
              name="user_email"
            />

            <textarea style={{backgroundColor: darkMode && "#333"}} placeholder="Message" name="message" rows={5} />
            <input type="submit" value="Send" className="button" />
            {envoiMsg}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
