import React, { Component } from "react";
import Header from "../components/Header";
import Body from "../components/Body";

import { getInitialData } from "../utils/data";

class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: '',
    }

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onActiveNoteHandler = this.onActiveNoteHandler.bind(this);
    this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, desc }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            desc,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteNoteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onArchiveNoteHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note) });
  }

  onActiveNoteHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
  }

  onSearchNoteEventHandler({ keyword }) {
    this.setState(() => {
      return { search: keyword }
    });
  }

  render() {
    return (
      <>
        <Header searchNote={this.onSearchNoteEventHandler} />
        <Body addNote={this.onAddNoteEventHandler} notes={this.state.notes} search={this.state.search} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} onActive={this.onActiveNoteHandler} />
      </>
    );
  }
}

export default NotesApp;
