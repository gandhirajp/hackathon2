import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
`;

const PopupHeader = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
`;

const PopupText = styled.p`
  font-size: 20px;
  color: #555;
  margin: 30px 0;
`;

const NextButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const Popup = ({ title, content, isNextVisible}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleNextClick = () => {
    setIsVisible(false); // Hide the popup
    // Rea.push("/career-path-selector");
  };

  if (!isVisible) return null;

  return (
    <Overlay>
      <PopupContainer>
        <PopupHeader>{title}</PopupHeader>
        <PopupText>
          {content}
        </PopupText>
        <NextButton onClick={() => setIsVisible(false)}>Close</NextButton>
        {isNextVisible&& <Link to='/career-path-selector'> <NextButton onClick={handleNextClick}>Next</NextButton></Link>}
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;