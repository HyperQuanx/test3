import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  left: 50%;
  top: 50%;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
`;

const CloseButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`;

const ModalBox = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal1 = () => {
    setIsModal1Open(true);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Modal</h1>
      <div className="modalbox">
        <button className="noOverlay" onClick={openModal1}>
          open modal
        </button>
        <button className="overlay" onClick={openModal2}>
          open modal
        </button>

        {isModal1Open && (
          <ModalOverlay>
            <ModalContent>
              <p>머리가 너무 아파요.</p>
              <div style={{ gap: "10px" }}>
                <button
                  onClick={closeModal1}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "8px",
                    backgroundColor: "rgb(250, 177, 160)",
                    color: "rgb(214, 48, 49)",
                    height: "40px",
                    width: "100px",
                  }}
                >
                  닫기
                </button>
                <span> </span>
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "8px",
                    backgroundColor: "rgb(85, 239, 196)",
                    color: "rgb(0, 0, 0)",
                    height: "40px",
                    width: "100px",
                  }}
                >
                  확인
                </button>
              </div>
            </ModalContent>
          </ModalOverlay>
        )}

        {isModal2Open && (
          <ModalOverlay onClick={closeModal2}>
            <ModalContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>닫기 버튼만 있으며, overlay를 클릭하면 닫힙니다.</p>
                <CloseButton onClick={closeModal2}>X</CloseButton>
              </div>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </div>
  );
};

export default ModalBox;
