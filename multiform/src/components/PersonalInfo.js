import React from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <h3>Enter your name and email</h3>
      <div className="form-container">
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          value={formData.user_name}
          onChange={(e) =>
            setFormData({ ...formData, user_name: e.target.value })
          }
        />
        <input
          type="email"
          name="user_email"
          id="mail"
          placeholder="Enter your email"
          value={formData.user_email}
          onChange={(e) =>
            setFormData({ ...formData, user_email: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
