import React from "react";
import ActiveButton from "./ActiveButton";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/data";

function NoteItem({ id, title, createdAt, desc, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-body__item">

      <NoteItemContent title={title} date={showFormattedDate(createdAt)} desc={desc} />

      <div className="note-body__item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {
          archived ?
            <ActiveButton id={id} onActive={onActive} />
            :
            <ArchiveButton id={id} onArchive={onArchive} />
        }
      </div>
    </div>
  );
}

export default NoteItem;
