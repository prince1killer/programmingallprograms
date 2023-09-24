import React, { useState } from 'react';

function OnlineExam() {
  const questions = [
    {
      id: 1,
      text: 'What is the capital of France?',
      choices: ['London', 'Paris', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      id: 2,
      text: 'What is the highest mountain in the world?',
      choices: ['Kilimanjaro', 'Everest', 'Denali', 'Aconcagua'],
      answer: 'Everest',
    },
    {
      id: 3,
      text: 'What is the currency of Japan?',
      choices: ['Dollar', 'Pound', 'Euro', 'Yen'],
      answer: 'Yen',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    // Check if user selected correct answer and increment score
    const selectedAnswer = userAnswers[currentQuestion];
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to next question
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    // Reset user answer for next question
    setUserAnswers({ ...userAnswers, [currentQuestion]: null });
  };

  const handleSelectAnswer = (event) => {
    const selectedAnswer = event.target.value;
    setUserAnswers({ ...userAnswers, [currentQuestion]: selectedAnswer });
  };

  return (
    <div>
      <h2>Online Exam</h2>
      <p>
        Question {currentQuestion + 1}: {questions[currentQuestion].text}
      </p>
      {questions[currentQuestion].choices.map((choice, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={choice}
              checked={userAnswers[currentQuestion] === choice}
              onChange={handleSelectAnswer}
            />
            {choice}
          </label>
        </div>
      ))}
      <button onClick={handleNextQuestion}>Next</button>
      {currentQuestion === questions.length - 1 && (
        <div>
          <p>Your score is: {score}</p>
        </div>
      )}
    </div>
  );
}

export default OnlineExam;
