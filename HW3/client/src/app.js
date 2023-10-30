import React,{ Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  // 定義組件的初始狀態，`names` 屬性用於存儲名字
  state = {
    names: []
  };

  // 函數 `addName` 用於將新名字添加到狀態中
  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  // 函數 `removeName` 用於刪除指定索引的名字
  removeName = (clickedIndex) => {
    // 使用 `filter` 方法創建一個新的名字列表，排除被點擊的名字
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  // 組件更新時觸發，將名字列表保存到本地存儲
  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
  }

  // 組件掛載後觸發，用於從本地存儲中還原已保存的名字列表
  componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }

  // 渲染組件的函數，呈現名牌生成器應用程序的主要外觀
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {/* 將 `addName` 函數傳遞給 `UserInput` 組件，用於添加名字 */}
        <UserInput addName={this.addName} />
        {/* 顯示名牌列表，並將 `names` 列表和 `removeName` 函數傳遞給 `NameTagList` 組件 */}
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;