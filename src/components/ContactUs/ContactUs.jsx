import React from "react";
import "./ContactUs.scss";
import MessageIcone from "../../assets/msg-icon.png";
import LocationIcone from "../../assets/location-icon.png";
import phoneIcone from "../../assets/phone-icon.png";
import GmailIgone from "../../assets/mail-icon.png";

export const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bb4d680-6d14-49be-906d-72214e247372");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contactUs container">
      <div className="leftSide">
        <div className="header">
          <h3>Send us a message.</h3>
          <img src={MessageIcone} alt="" />
        </div>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community
        </p>
        <div className="ourCommunicationContacts">
          <div className="mail">
            <img src={GmailIgone} alt="" />
            <span> AhmedMohamed@gmail.com</span>
          </div>
          <div className="location">
            <img src={LocationIcone} alt="" />
            <span>Qesm 2th Shoubra ElKhiema , Qulybia</span>
          </div>
          <div className="phone">
            <img src={phoneIcone} alt="" />
            <span>+20115-776-1127</span>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <form onSubmit={onSubmit} action="">
          <label htmlFor="name">Your Name</label>
          <input
            onChange={() => setResult("")}
            name="name"
            type="text"
            id="name"
            placeholder="Enter Your Name"
          />
          <label htmlFor="phoneNumber">phone Number</label>
          <input
            onChange={() => setResult("")}
            name="phone"
            type="text"
            id="phoneNumber"
            placeholder="Enter Your phone Number"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows={10}
            placeholder="Enter Your Message"
            id="message"
          ></textarea>
          <div>
            <button>Submit Now</button>
          </div>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};
