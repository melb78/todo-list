import React, { useState } from "react";
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

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
            {isRead && <span className="read-item">{`${item.id} - ${item.text}`}</span>}
            {!isRead && <span>{`${item.id} - ${item.text}`}</span>}
      </button>

      <div id="btn-Func">
       
        <button onClick={editEventHandler}>
          <FaPencilAlt />
        </button>

        <button onClick={deleteEventHandler}>
          <FaTrashAlt  />
        </button>

      </div>
    </li>
  );
};
