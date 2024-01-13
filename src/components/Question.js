import React from "react";

const Question = ({ question, userAnswer, onAnswerChange, onNextQuestion }) => {
  if (!question) {
    return <div>Loading...</div>;
  }

  const {
    question: questionText,
    correct_answer,
    incorrect_answers,
  } = question;

  const handleOptionChange = (option) => {
    onAnswerChange(option);
  };
  const handleNextClick = () => {
    onNextQuestion();
  };

  return (
    <div>
      <h2>{questionText}</h2>
      <div>
        <p>Options:</p>
        {[...incorrect_answers, correct_answer].map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={option}
              checked={userAnswer === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next Question</button>
    </div>
  );
};

export default Question;
