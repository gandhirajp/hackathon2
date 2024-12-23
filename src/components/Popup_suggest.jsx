import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./loader";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

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
  width: 600px;
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
  font-size: 16px;
  color: #555;
  margin: 20px 0;
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

const Popup = ({ title, content, highlight }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1800);
  if (!isVisible) return null;

  return (
    <Overlay>
      {loading ? (
        <Loader />
      ) : (
        <PopupContainer>
          <PopupHeader>{title}</PopupHeader>
          <PopupText>{content}</PopupText>
          {highlight && (
            <PopupHeader
              style={{
                fontWeight: "bold",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Link
                sx={{ textDecoration: "none", backgroundColor: "transparent" }}
              >
                <Typography sx={{ p: 2, fontSize: "20px", fontWeight: "bold" }}>
                  Helath and wellness
                </Typography>
              </Link>
              <Link
                to="/government-services"
                sx={{ textDecoration: "none", backgroundColor: "transparent" }}
              >
                <Typography sx={{ p: 2, fontSize: "20px", fontWeight: "bold" }}>
                  Government Services
                </Typography>
              </Link>
            </PopupHeader>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <NextButton
              onClick={() => setIsVisible(false)}
              style={{ marginTop: "20px" }}
            >
              Close
            </NextButton>
          </div>
        </PopupContainer>
      )}
    </Overlay>
  );
};

export default Popup;
