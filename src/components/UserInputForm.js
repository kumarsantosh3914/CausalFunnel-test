import React, { useRef, useState } from "react";
import Quiz from "./Quiz";

const UserInputForm = () => {
  const userInputRef = useRef(null);
  const [displayedInput, setDisplayedInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Access the input value from the ref
    const userInputValue = userInputRef.current.value;
    // Update state or perform other actions
    setDisplayedInput(userInputValue);
    // Clear the input field
    userInputRef.current.value = "";
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form>
          <input
            placeholder="Enter your email address"
            type="email"
            ref={userInputRef}
          />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>{displayedInput}</h1>
          <Quiz />
        </div>
      )}
    </div>
  );
};

export default UserInputForm;
