import React from "react";
import { ItemListElement } from "./ItemListElement";

export const ListTodoItems = ({ itemList, deleteHandler, editHandler}) => {
  return (
    <ul>
      {itemList.map((x) => (
        <ItemListElement key={x.id} item={x}
          deleteHandler={deleteHandler}
          editHandler={editHandler}/>
      ))}
    </ul>
  );
};
