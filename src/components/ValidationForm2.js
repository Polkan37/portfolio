import React, { useState } from "react";
import validator from "validator";

function ValidationForm2() {
    const [message, setMessage] = useState("");
  const validateName = (e) => {
    var name = e.target.value;

    if (validator.isAlphanumeric(name)) {
        setMessage("");
    } else {
        setMessage("Please, enter valid Name");
    }
  };
  const validatePhone = (e) => {
    var phone = e.target.value;

    if (validator.isMobilePhone(phone)) {
        setMessage("");
    } else {
        console.log('her')
        setMessage("Please, enter valid Phone");
    }
  };
  return (
    <div className="oder-modal__content">
        <div className="oder-modal__contacts">
      <input
           className="oder-modal__field"
           type="text"
           placeholder="Name"
           required
           onChange={(e) => validateName(e)}
        ></input>

      <input
            className="oder-modal__field"
            type="text"
            id="userPhone"
            placeholder="380*********"
            name="Phone"
            onChange={(e) => validatePhone(e)}
            required
        ></input>

        </div>
        <span style={{ fontWeight: "bold", color: "red", margin: "0 0 .5em 0"  }}>
          {message}
        </span>
        <textarea
          className="oder-modal__textarea"
          placeholder="Write here in what style photoshoot do you want or show some examples..."
          id="story"
          name="story"
          rows="10"
          cols="55"
        >
        </textarea>
    </div>
  );
}

export default ValidationForm2;