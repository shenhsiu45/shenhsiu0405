import React from "react";
import ReactDOM from "react-dom";   
import App from "./app.js";     // 匯入主要應用程式組件
import "./styles.css";      // 匯入樣式表

const rootElement = document.getElementById("root");
// 渲染應用程式組件到位於HTML文件中的id為"root"的元素中
ReactDOM.render(<App />, rootElement);
