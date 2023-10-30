import React from "react";
import NameTag from "./NameTag.js"; // 匯入 NameTag 組件
import "./styles.css";

const NameTagList = (props)=> {
  // 定義一個函式，用於渲染單個名牌
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );

  // 透過 map 函式將每個名字轉換為 NameTag 組件
  const NameTagElements = props.names.map(renderNameTag);

  return <main>{NameTagElements}</main>;
};

export default NameTagList;
