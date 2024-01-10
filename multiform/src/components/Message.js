import React from "react";

const Message = ({ formData, setFormData }) => {
  return (
    <div>
      <h3>Enter your message</h3>
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter your message here"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
    </div>
  );
};

export default Message;
