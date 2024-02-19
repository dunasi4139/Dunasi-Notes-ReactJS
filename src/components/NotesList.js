import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return (
      <p className="notes-body__list__empty-message">Tidak ada catatan</p>
    );
  }

  return (
    <div className="notes-body__list">
      {
        notes.map((note) => (
          <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
        ))
      }
    </div>
  );
}

export default NotesList;
