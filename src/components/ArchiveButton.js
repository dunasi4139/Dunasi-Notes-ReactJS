import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="note-body__item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>
  );
}

export default ArchiveButton;
