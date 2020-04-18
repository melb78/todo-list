import React, { useState, useRef, useEffect } from "react";
import { ListTodoItems } from "./ListTodoItems";

export const MainApp = () => {
  // Set state
  const [todoContent, setTodoContent] = useState("");
  const [itemList, setItemList] = useState([]);
  const [updateItemId, setUpdateItemId] = useState(-1);
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
    return () => {
      
    }
  }, []);

  const editItem = (itemId, itemValue) => {
    setTodoContent(itemValue);
    setUpdateItemId(itemId);
    refContainer.current.focus();
  };

  const deleteItem = (itemId) => {
    setItemList(itemList.filter((item) => item.id !== itemId));
  };

  const handleChange = (event) => {
    setTodoContent(event.target.value);
  }

  const keyDownHandler = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    if (updateItemId === -1) {
     // Async
      setItemList((itemList) => [...itemList, {
        id: itemList.length + 1,
        text: todoContent,
      }]);
    } 
    else 
    {
      const foundItem = itemList.find((x) => x.id === updateItemId);

      if (typeof foundItem !== "undefined") {
        foundItem.text = todoContent;
      }

      setUpdateItemId(-1);
    }

    setTodoContent("");
  };

  return (
    <div className="App">
      <header className="App-TextBox">
        <input id="textBox" type="text" 
            ref={refContainer}
            value={todoContent} 
            onChange={handleChange}  
            onKeyDown={keyDownHandler} />
      </header>

      <nav className="App-Label">
        <h1>
          <span id="numTasks">
            {itemList.length}
          </span>
          TASKS TO-DO With Travis CI</h1>
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
