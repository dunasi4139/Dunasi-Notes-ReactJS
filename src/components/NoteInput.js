import React, { Component } from "react";

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      maxChar: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      }
    });
  }

  onDescChangeEventHandler(event) {
    this.setState(() => {
      return {
        desc: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: '',
        desc: '',
      }
    });
  }

  render() {
    return (
      <div className="note-body__input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-body__input__title__char-limit">Sisa karakter: {this.state.maxChar - this.state.title.length}</p>
          <input className="note-body__input__title" type="text" placeholder="Masukkan Judul Catatan ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="note_body__input__desc" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.desc} onChange={this.onDescChangeEventHandler} required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
