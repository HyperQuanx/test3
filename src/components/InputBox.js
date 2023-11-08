import React, { useState } from "react";
import "../App.css";

function InputBox() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    const formattedPrice = price.replace(/,/g, ""); // 콤마 제거

    alert(JSON.stringify({ name, price: formattedPrice }));
  };

  const handlePriceChange = (e) => {
    const inputPrice = e.target.value;
    const formattedPrice = inputPrice.replace(/,/g, ""); // 콤마 제거

    // 숫자를 입력할 때마다 3자리마다 콤마를 추가
    const numberWithCommas = formattedPrice.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    setPrice(numberWithCommas);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Input</h1>
      <div className="inputBox">
        <div>
          <label>이름</label>
          <br />
          <input
            className="inputSon"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>가격</label>
          <br />
          <input
            className="inputSon"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <button className="save" onClick={handleSave}>
          저장
        </button>
      </div>
    </div>
  );
}

export default InputBox;
