import React, { useState } from "react";
import "../../src/questions.css";
import Questionnaire from "../../src/questionsPage";
import Result from "../../src/result";
import CareerPaths from "./questions";
import Navbar from "./Navbar";

const CareerPathQues = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionNumber, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: answerValue,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateCareer = () => {
    let careerChoices = [];
    CareerPaths.forEach((question) => {
      const answer = answers[question.question];
      if (answer) {
        const career = question.choices.find(
          (choice) => choice.value === answer
        )?.career;
        if (career) {
          careerChoices.push(career);
        }
      }
    });
    return careerChoices.join(", ");
  };

  return (
    <div className="App">
      <Navbar />
      {!submitted ? (
        <Questionnaire
          careerPaths={CareerPaths}
          answers={answers}
          onAnswerChange={handleAnswerChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <Result career={calculateCareer()} />
      )}
    </div>
  );
};

export default CareerPathQues;
