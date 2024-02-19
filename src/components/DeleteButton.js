import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-body__item__delete-button" onClick={() => onDelete(id)}>Delete</button>
  );
}

export default DeleteButton;
