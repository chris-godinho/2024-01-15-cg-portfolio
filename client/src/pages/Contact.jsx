import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import axios from "axios";

function Contact() {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setErrorMessage("");

    if (inputType === "senderName") {
      setSenderName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!senderName) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!validateEmail(email) || !email) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!message) {
      setErrorMessage("Please enter a message.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        senderName,
        email,
        message,
      });

      // Handle success (you can show a success message to the user)
      console.log(response.data);
      setSenderName('');
      setEmail('');
      setMessage('');
      alert(`Message sent!`);
    } catch (error) {
      // Handle error (you can show an error message to the user)
      console.error(error);
      setErrorMessage('Error sending email. Please try again later.');
    }
  };

  return (
    <div className="main-container-cg">
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
    </div>
  );
}

export default Contact;
