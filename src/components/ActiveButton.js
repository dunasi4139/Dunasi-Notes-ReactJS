import React from "react";

function ActiveButton({ id, onActive }) {
  return (
    <button className="note-body__item__archive-button" onClick={() => onActive(id)}>Pindahkan</button>
  );
}

export default ActiveButton;
