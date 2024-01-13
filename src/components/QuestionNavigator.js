import React from "react";
import "./QuestionNavigator.css";

const QuestionNavigator = ({
  questions,
  currentQuestion,
  visitedQuestions,
  attemptedQuestions,
  onNavigate,
}) => {
  return (
    <div className="question-navigator">
      <h2>Question Navigator</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <button
              className={
                index === currentQuestion
                  ? "current-question"
                  : attemptedQuestions.includes(index)
                  ? "attempted-question"
                  : visitedQuestions.includes(index)
                  ? "visited-question"
                  : ""
              }
              onClick={() => onNavigate(index)}
            >
              Question {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionNavigator;
