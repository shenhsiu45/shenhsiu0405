import React, { Component } from "react";
//這是一個React組件，用於接收用戶輸入的名字，並通過表單提交來添加名字。

class UserInput extends Component {
  state = {
    name: "" // 在組件的狀態中儲存名字
  };

  // 更新名字的狀態
  updateName = (event) => this.setState({ name: event.target.value });

  // 表單提交處理函式
  handleSubmit = (event) => {
    event.preventDefault(); // 阻止表單預設的提交行為
    this.props.addName(this.state.name); // 呼叫父組件傳遞的 addName 函式，將名字傳遞給父組件
    this.setState({ name: "" }); // 清空名字狀態
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}   // 輸入框的值來自組件的狀態中的名字
          onChange={this.updateName}    // 當輸入框的值發生變化時，調用updateName函式
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;