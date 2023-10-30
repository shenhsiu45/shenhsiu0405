import React from "react";

const NameTag = (props) => {
  // 定義一個函式，用於處理點擊"刪除"按鈕的操作
  const deleteByIndex = () => props.removeName(props.index);

  return (
    <div className="name-tag">
      {/* 顯示名牌的標題 */}
      <h3 className="title">HELLO</h3>
      {/* 顯示名牌的副標題 */}
      <p className="subtitle">my name is</p>
      {/* 顯示名牌的名字，名字來自傳遞的 props */}
      <h2 className="name">{props.name}</h2>
      {/* "刪除"按鈕，點擊時觸發 deleteByIndex 函式 */}
      <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
    </div>
  );
};

export default NameTag;