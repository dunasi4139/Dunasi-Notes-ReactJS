import React from "react";

function NoteItemContent({ title, date, desc }) {
  return (
    <div className="note-body__item__content">
      <h3 className="note-body__item__title">{title}</h3>
      <p className="note-body__item__date">{date}</p>
      <p className="note-body__item__body">{desc}</p>
    </div>
  );
}

export default NoteItemContent;
