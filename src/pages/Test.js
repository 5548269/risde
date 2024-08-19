import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../questions';

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(144).fill(null));
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Test completed, calculate result
      const result = calculateResult(newAnswers);
      navigate('/results', { state: { result } });
    }
  };

  return (
    <div className="test-container">
      <h1>九型人格测试</h1>
      <p>问题 {currentQuestion + 1} / {questions.length}</p>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function calculateResult(answers) {
  const types = Array(9).fill(0);
  answers.forEach((answer, index) => {
    const typeIndex = Math.floor(index / 16);
    if (answer === 0) {
      types[typeIndex]++;
    } else {
      types[typeIndex]--;
    }
  });
  return types;
}

export default Test;