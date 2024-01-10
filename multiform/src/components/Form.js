import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PersonalInfo from "./PersonalInfo";
import Mood from "./Mood";
import Message from "./Message";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    emoji: "",
    message: "",
  });
  const FormTitles = ["1/3", "2/3", "3/3"];
  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Mood formData={formData} setFormData={setFormData} />;
    } else {
      return <Message formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div>
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div className="body">{PageDisplay()}</div>
      <div className="footer"></div>
      <button
        disabled={page === FormTitles.length - 3}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          if (page === FormTitles.length - 1) {
            emailjs
              .send(
                "service_dp9zfd8",
                "template_47f1zec",
                formData,
                "eYoAMwN_nverC6mGB"
              )
              .then(
                (result) => {
                  alert("Message sent successfully");
                },
                (error) => {
                  console.log(error.text);
                }
              );
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}
      >
        {page === FormTitles.length - 1 ? "Send" : "next"}
      </button>
    </div>
  );
};

export default Form;
