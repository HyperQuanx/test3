import React, { useState } from "react";
import styled from "styled-components";

const SmallBox = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  height: 40px;
  width: 100px;
`;

const MediumBox = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  height: 45px;
  width: 130px;
`;

const BigBox = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
  height: 50px;
  width: 200px;
  border: 3px solid ${(props) => props.bgColor};
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;

function Button() {
  const [isButtonClicked1, setIsButtonClicked1] = useState(false);
  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const [isButtonClicked3, setIsButtonClicked3] = useState(false);
  const [isButtonClicked4, setIsButtonClicked4] = useState(false);

  const handleBigBoxMouseDown1 = () => {
    setIsButtonClicked1(true);
  };

  const handleBigBoxMouseUp1 = () => {
    setIsButtonClicked1(false);
  };
  const handleBigBoxMouseDown2 = () => {
    setIsButtonClicked2(true);
  };

  const handleBigBoxMouseUp2 = () => {
    setIsButtonClicked2(false);
  };
  const handleBigBoxMouseDown3 = () => {
    setIsButtonClicked3(true);
  };

  const handleBigBoxMouseUp3 = () => {
    setIsButtonClicked3(false);
  };
  const handleBigBoxMouseDown4 = () => {
    setIsButtonClicked4(true);
  };

  const handleBigBoxMouseUp4 = () => {
    setIsButtonClicked4(false);
  };

  const handleBigBoxClick = () => {
    alert("버튼을 만들어보세요");
  };

  const handleBigBoxClick2 = () => {
    const userInput = window.prompt("어렵나요? 어려워요");
    if (userInput) {
      alert(userInput);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginLeft: "10px",
      }}
    >
      <h1>Button</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <BigBox
          bgColor="rgb(85, 239, 196)"
          color="black"
          onClick={handleBigBoxClick}
        >
          Large Primary Button
        </BigBox>
        <MediumBox
          bgColor={
            isButtonClicked1 ? "rgb(192, 192, 192)" : "rgb(85, 239, 196)"
          }
          color="black"
          onMouseDown={handleBigBoxMouseDown1}
          onMouseUp={handleBigBoxMouseUp1}
        >
          Medium
        </MediumBox>
        <SmallBox
          bgColor={
            isButtonClicked2 ? "rgb(192, 192, 192)" : "rgb(85, 239, 196)"
          }
          color="black"
          onMouseDown={handleBigBoxMouseDown2}
          onMouseUp={handleBigBoxMouseUp2}
        >
          Small
        </SmallBox>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <BigBox
          bgColor="rgb(250, 177, 160)"
          color="red"
          onClick={handleBigBoxClick2}
        >
          Large Negative Button
        </BigBox>
        <MediumBox
          bgColor={
            isButtonClicked3 ? "rgb(192, 192, 192)" : "rgb(250, 177, 160)"
          }
          color="red"
          onMouseDown={handleBigBoxMouseDown3}
          onMouseUp={handleBigBoxMouseUp3}
        >
          Medium
        </MediumBox>
        <SmallBox
          bgColor={
            isButtonClicked4 ? "rgb(192, 192, 192)" : "rgb(250, 177, 160)"
          }
          color="red"
          onMouseDown={handleBigBoxMouseDown4}
          onMouseUp={handleBigBoxMouseUp4}
        >
          Small
        </SmallBox>
      </div>
    </div>
  );
}

export default Button;
