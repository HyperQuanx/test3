import React from "react";
import Select from "react-select";
import "../App.css";

function Selectw() {
  return (
    <div className="scv">
      <h1>Select</h1>
      <div className="scbox">
        <div className="scBox1">
          <select>
            <option key="react" value="react">
              리액트
            </option>
            <option key="java" value="java">
              자바
            </option>
            <option key="python" value="python">
              파이썬
            </option>
            <option key="js" value="js">
              자바스크립트
            </option>
          </select>
        </div>
        <div className="scBox2">
          <select className="wpdbr">
            <option key="react" value="react">
              리액트
            </option>
            <option key="java" value="java">
              자바
            </option>
            <option key="python" value="python">
              파이썬
            </option>
            <option key="js" value="js">
              자바스크립트
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Selectw;
