// src/Questionnaire.js
import React, { useState, useEffect } from "react";
import Popup from "../src/components/Popup_suggest";
import "./Questionnaire.css";

const Questionnaire = ({ careerPaths }) => {
  const [answers, setAnswers] = useState({});
  const [openPopup, setOpenPopup] = useState("");

  useEffect(() => {
    // Randomly select answers when the component is mounted
    const randomAnswers = randomizeAnswers(careerPaths);
    setAnswers(randomAnswers);
  }, [careerPaths]);

  // Randomly select answers from available choices
  const randomizeAnswers = (questions) => {
    const randomAnswers = {};
    questions.forEach((question) => {
      const randomChoice =
        question.choices[Math.floor(Math.random() * question.choices.length)];
      randomAnswers[question.question] = randomChoice.value;
    });
    return randomAnswers;
  };

  const generateCareerSuggestions = () => {
    const careerPathsList = [];

    // Loop through the answers and accumulate career paths
    Object.keys(answers).forEach((questionKey) => {
      const question = careerPaths.find(
        (q) => q.question === parseInt(questionKey)
      );
      if (question) {
        const selectedChoice = question.choices.find(
          (choice) => choice.value === answers[questionKey]
        );
        if (selectedChoice) {
          careerPathsList.push(...selectedChoice.career.split(", "));
        }
      }
    });

    // Remove duplicates
    const uniqueCareerPaths = [...new Set(careerPathsList)];

    // Return only the top 2-3 career paths
    return uniqueCareerPaths.slice(0, 3);
  };

  const handleSubmit = () => {
    const suggestions = generateCareerSuggestions();
    setOpenPopup(suggestions);
  };

  return (
    <div className="questionnaire-container">
      <h1 className="questionnaire-title">
        Let's find you a suitable career path
      </h1>
      <p className="questionnaire-title">
        Help us with a few simple questions to know you better
      </p>
      {openPopup && (
        <Popup
          title="Congratulations!"
          content={`Based on your choices, your career paths are:`}
          highlight={openPopup}
        />
      )}
      <div className="questionnaire">
        {careerPaths.map((question) => (
          <div key={question.question} className="question">
            <h3 className="question-text">
              <span>{question.question}.</span> {question.text}
            </h3>
            <div className="choices">
              {question.choices.map((choice) => (
                <div key={choice.value} className="choice">
                  <input
                    type="radio"
                    id={`${question.question}-${choice.value}`}
                    name={`question-${question.question}`}
                    value={choice.value}
                    checked={answers[question.question] === choice.value}
                    disabled
                  />
                  <label
                    htmlFor={`${question.question}-${choice.value}`}
                    className="choice-label"
                  >
                    {choice.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="submit-btn-container">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
