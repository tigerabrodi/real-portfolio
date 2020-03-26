import React, {useState} from 'react';
import "./Contact.scss"

const Contact = () => {

    const [status, setStatus] = useState("");

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS")
          } else {
            setStatus("ERROR")
          }
        };
        xhr.send(data);
      }

    return (
        <section className="contact">
        <div className="contact__wrapper">
            <h1 className="contact__title">Get In Touch</h1>
            <p className="contact__text">I am currently looking for a part-time remote position. My inbox is always open, feel free to ask me anything, I'll try my best to answer your email!</p>
            <form
            onSubmit={(ev) => submitForm(ev)}
            action="https://formspree.io/xpzlwkpr"
            method="POST"
            className="contact__form"
          >
            <label className="contact__form__label">Email:</label>
            <input placeholder="Your Email..." type="email" name="email" className="contact__form__input" />
            <label className="contact__form__label">Message:</label>
            <textarea placeholder="Your Message..." type="text" name="message" className="contact__form__input contact__form__input-message" />
            {status === "SUCCESS" ? <p className="contact__success">Thanks!</p> : <button className="contact__form__button">Submit</button>}
            {status === "ERROR" && <p className="contact__success">Ooops! There was an error.</p>}
          </form>
          </div>
        </section>
    );
}

export default Contact;
