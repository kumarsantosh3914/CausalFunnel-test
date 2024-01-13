import React from "react";
import "./QuizReport.css";

const QuizReport = ({ questions, userAnswers, timer }) => {
  const calculateScore = () => {
    if (!questions || questions.length === 0) {
      return 0;
    }

    let score = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === userAnswers[index]) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-report">
      <h1>Quiz Report</h1>
      <div>
        <p>
          Score: {calculateScore()} out of {questions && questions.length}
        </p>
      </div>
      <div>
        <h2>Questions and Answers</h2>
        <ul>
          {questions && questions.length > 0 ? (
            questions.map((question, index) => (
              <li key={index}>
                <p>
                  <strong>Question:</strong> {question.question}
                </p>
                <p>
                  <strong>Your Answer:</strong> {userAnswers[index]}
                </p>
                <p>
                  <strong>Correct Answer:</strong> {question.correct_answer}
                </p>
              </li>
            ))
          ) : (
            <li>No questions available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default QuizReport;
