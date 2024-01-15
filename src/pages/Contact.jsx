import { useState, useEffect } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setErrorMessage('');

    if (inputType === 'senderName') {
      setSenderName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      setErrorMessage('');
      if (isFocused) {
        if (!senderName) {
          setErrorMessage('Please enter your name.');
          return;
        }
        if (!validateEmail(email) || !email) {
          setErrorMessage('Please enter a valid email address.');
          return;
        }
        if (!message) {
          setErrorMessage('Please enter a message.');
          return;
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFocused, senderName, email, message]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!senderName) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!validateEmail(email) || !email) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a message.');
      return;
    }

    setSenderName('');
    setEmail('');
    setMessage('');
    alert(`Message sent!`);
  };

  return (
    <div className="resume-block">
      <h1>Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input
          value={senderName}
          name="senderName"
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="senderName"
          placeholder="Your name here"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">E-mail</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="email"
          placeholder="youremail@here.com"
          className="form-control"
          id="exampleFormControlInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="message"
          placeholder="Your message here"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        />
      </div>
        <button type="submit" className="btn custom-btn">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;