import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../Button";
import { ClearIcon, ContactSvg, PhoneIcon, SubmitIcon } from "../Icons";
import InputComponent from "../InputComponent";
import "./ContactForm.scss";

function Contact({ isOpen, setIsOpen }) {
  const handleRecaptcha = (value) => {
    if (value) {
      //set the value of recaptcha
    }
  };
  return (
    <div className={isOpen ? "contact sidebar-open" : "contact"}>
      <div
        className="contact__btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className="contact__btn--action">
          <span className="btn-txt">GET DEMO</span>

          <span className="btn-icon">
            <PhoneIcon />
          </span>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__icon">
          <ContactSvg />
        </div>
        <h2 className="sidebar__heading">Book Free Consultation</h2>

        <div className="sidebar__content">
          <div className="sidebar__content__form">
            <InputComponent
              placeholder="First Name"
              inputClass="sidebar__content__form--inpt"
            />
            <InputComponent
              placeholder="Last Name"
              inputClass="sidebar__content__form--inpt"
            />
            <InputComponent
              placeholder="Email"
              type="email"
              required
              inputClass="sidebar__content__form--inpt"
            />
            <InputComponent
              placeholder="Mobile"
              inputClass="sidebar__content__form--inpt"
            />
            <InputComponent
              placeholder="Message"
              type="textarea"
              inputClass="sidebar__content__form--msg"
            />
            {/* <div className="recaptcha">
              <ReCAPTCHA
                className="recap"
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={(value) => handleRecaptcha(value)}
              />
            </div> */}
          </div>
          <div className="sidebar__content__btn">
            <Button
              className="form-cancel"
              btnIcon={<ClearIcon />}
              onClick={() => {}}
            />
            <Button
              className="form-submit"
              btnIcon={<SubmitIcon />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
