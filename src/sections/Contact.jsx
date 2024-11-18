import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";
import { contact } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isPC = useMediaQuery({ minWidth: 1024 });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    setLoading(true);

    try {
      await emailjs.send(
        "service_4yz0t8k",
        "template_1srzh5m",
        {
          from_name: form.name,
          to_name: "Yanis",
          from_email: form.email,
          to_email: "yanis.ikhe@gmail.com",
          message: form.message,
        },
        "yOuV3YnxSdl5ZQFan"
      );

      setLoading(false);
      alert("Message envoyé avec succès !");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {isPC && (
          <img
            src="/assets/terminal.png"
            alt="terminal"
            className="absolute inset-0 min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text mt-10">{contact.title}</h3>
          <p className="text-lg text-white-600 mt-3">{contact.desc}</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">{contact.name}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={contact.namePlaceholder}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">{contact.email}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={contact.mailPlaceholder}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">{contact.message}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={contact.messagePlaceholder}
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? contact.sending : contact.send}
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
