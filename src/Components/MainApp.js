import React, { useState } from "react";
import { ListTodoItems } from "./ListTodoItems";

export const MainApp = () => {
  // Set state
  const [itemList, setItemList] = useState([]);
  const [updateItemId, setUpdateItemId] = useState(-1);

  const editItem = (itemId, itemValue) => {
    document.getElementById("textBox").value = itemValue;
    setUpdateItemId(itemId);
  };

  const deleteItem = (itemId) => {
    setItemList(itemList.filter((item) => item.id !== itemId));
  };

  const keyDownHandler = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    if (updateItemId === -1) {
      const newItem = {
        id: itemList.length + 1,
        text: document.getElementById("textBox").value,
      };

      // Async
      setItemList((itemList) => [...itemList, newItem]);
    } else {
      const foundItem = itemList.find((x) => x.id === updateItemId);

      if (typeof foundItem !== "undefined") {
        foundItem.text = document.getElementById("textBox").value;
      }

      setUpdateItemId(-1);
    }

    document.getElementById("textBox").value = "";
  };

  return (
    <div className="App">
      <header className="App-TextBox">
        <input id="textBox" type="text" onKeyDown={keyDownHandler} />
      </header>

      <nav className="App-Label">
        <h1>
          <span id="numTasks">
            {itemList.length}
          </span>
          TASKS TO-DO</h1>
      </nav>

      <section className="App-Collection">
        <ListTodoItems
          itemList={itemList}
          editHandler={editItem}
          deleteHandler={deleteItem}          
        />
      </section>
    </div>
  );
};

export default MainApp;
