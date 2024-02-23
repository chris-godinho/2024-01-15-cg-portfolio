// Contact.jsx

import { useState } from "react";
import { validateEmail } from "../utils/helpers";

import { useModal } from "./context/ModalProvider.jsx";

import ContactFormModal from "./components/ContactFormModal.jsx";

// Define HeroTofu form endpoint
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/eeadf220-b429-11ee-9dd2-c1caafee32ff";

function Contact() {

  let modalMessage = "";

  // Define fields state variables for the form
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Open the modal
  const { openModal } = useModal();

  const openContactFormModal = () => {
    openModal(<ContactFormModal modalMessage={modalMessage}/>);
  };

  // Define functions for handling form input changes and form submission
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    modalMessage = "";

    if (inputType === "senderName") {
      setSenderName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    // Prevent default form submission behavior
    e.preventDefault();

    // Validate form input
    if (!senderName) {
      modalMessage = "Please enter your name.";
    } else if (!validateEmail(email) || !email) {
      modalMessage = "Please enter a valid email address.";
    } else if (!message) {
      modalMessage = "Please enter a message.";
    }

    if (modalMessage !== "") {
      openContactFormModal();
      modalMessage = "";
      return;
    }

    // Define data object for form submission
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    // Submit form data to HeroTofu form endpoint
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSenderName("");
        setEmail("");
        setMessage("");
        modalMessage = "Your message has been sent, thank you.";
        openContactFormModal();
        modalMessage = "";
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  return (
    <div className="main-container-cg">
      <br id="contact-text-cg" />
      <p className="subtitle-cg contact-title-cg">Contact Me</p>
      <form className="form-container-cg" onSubmit={handleFormSubmit}>
        <label htmlFor="exampleFormControlInput1" className="hidden-cg">
          Name
        </label>
        <input
          value={senderName}
          name="senderName"
          onChange={handleInputChange}
          type="senderName"
          placeholder="name"
          className="form-control"
          id="exampleFormControlInput1"
        />
        <label htmlFor="exampleFormControlInput2" className="hidden-cg">
          Name
        </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email address"
          className="form-control"
          id="exampleFormControlInput2"
        />
        <label htmlFor="exampleFormControlTextarea1" className="hidden-cg">
          Name
        </label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="your message"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        />
        <button type="submit" className="contact-submit-button-cg button-cg">
          Submit
        </button>
      </form>
      <p>You can also <a href="mailto:cristianobgodinho@gmail.com">e-mail me</a> if you prefer.</p>
    </div>
  );
}

export default Contact;
