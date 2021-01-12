import './App.scss';

import classNames from 'classnames';
import * as React from 'react';
import axios from 'axios';

// your editor might show these svg imports as errors "Cannot find module", safe to ignore
import checkMark from './check-mark.svg';
import Header from './Header';
import Notes from './Notes';
import { types } from './types';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: [],
      currentNoteIndex: 0
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.getNotesRows = this.getNotesRows.bind(this);
    this.getUnread = this.getUnread.bind(this);
  }

  componentWillMount() {
    // TODO fetch notes and push them into state.
    axios({
      method: 'get',
      url: 'http://localhost:4000/notes'
    })
    .then((response) => {
      let unread = 0;
      response.data.forEach((note: types["Note"]) => {
        if (!note.read) {
          unread++;
        }
      })
      this.setState({
        notes: response.data,
        unread
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  // TODO this callback isn't working
  markAsRead() {
    this.setState((currentState: types["State"]) => {
      let marked = {
        ...currentState.notes[currentState.currentNoteIndex],
        read: true
      };
      let notes = [...currentState.notes];
      notes[currentState.currentNoteIndex] = marked;
      let unread = currentState.unread - 1;
      return { ...currentState, notes, unread };
    });
  }

  // TODO this callback isn't working
  selectNote(e: any) {
    this.setState({ currentNoteIndex: Number(e.currentTarget.id) });
  }

  getNotesRows() {
    // TODO fix the selected row highlight, which breaks on subsequent clicks to the sidebar.

    return this.state.notes.map((note: types['Note']) => (
      <div
        key={note.subject}
        className={classNames({'NotesSidebarItem': true,
          selected: this.state.notes.indexOf(note) === this.state.currentNoteIndex
        })}
        onClick={this.selectNote}
        id={this.state.notes.indexOf(note)}
      >
        <h4 className='NotesSidebarItem-title'>{note.subject}</h4>
        {note.read && <img alt='Check Mark' src={checkMark} />}
      </div>
    ));
  }

  getUnread () {
    let unread: number = 0;
    this.state.notes.forEach((note: types['Note']) => {
      if (!note.read) {
        unread++;
      }
    })
    return unread;
  }

  // TODO this component should be broken into separate components.

  render() {
    return (
      <div className='App'>
        <Header unread={this.getUnread()} />
        <Notes
          getNotesRows={this.getNotesRows}
          currentNoteIndex={this.state.currentNoteIndex}
          notes={this.state.notes}
          markAsRead={this.markAsRead}
        />
      </div>
    );
  }
}

export default App;
