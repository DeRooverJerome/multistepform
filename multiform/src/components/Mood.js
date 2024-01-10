import React from "react";

const Mood = ({ formData, setFormData }) => {
  return (
    <div>
      <h3>Select your mood</h3>
      <div className="emoji-container">
        <label>&#128512;</label>
        <input
          type="radio"
          name="emoji"
          id=""
          value="&#128512;"
          onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
        />
        <label>&#128528;</label>
        <input
          type="radio"
          name="emoji"
          id=""
          value="&#128528;"
          onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
        />
        <label>&#128545;</label>
        <input
          type="radio"
          name="emoji"
          id=""
          value="&#128545;"
          onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Mood;
