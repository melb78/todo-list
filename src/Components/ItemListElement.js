import React, { useState } from "react";

export const ItemListElement = ({
  item,
  deleteHandler,
  editHandler,
}) => {

  const [isRead, setIsRead] = useState(false);

  const checkEventHandler = () => {
    setIsRead(!isRead);
  };

  const editEventHandler = () => {
    editHandler(item.id, item.text);
  };

  const deleteEventHandler = () => {
    deleteHandler(item.id);
  };

  return (
    <li>
      <button id="btn-Text" onClick={checkEventHandler}>
            {isRead && <span className="read-item">{item.text}</span>}
            {!isRead && <span>{item.text}</span>}
      </button>

      <div id="btn-Func">
        <button id="btn-edit" onClick={editEventHandler}>
            <img src="edit.png" alt="edit" />
        </button>
        <button id="btn-delete" onClick={deleteEventHandler}>
            <img src="bin.png" alt="bin" /> 
        </button>
      </div>
    </li>
  );
};
