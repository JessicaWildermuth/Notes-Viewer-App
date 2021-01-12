import * as React from 'react';
import NotesDetails from './NotesDetails';
import NotesSidebar from './NotesSidebar';
import { types } from './types';

function Notes(props: types['NotesProps']) {
  return (
    <div className="Notes">
      <NotesSidebar  getNotesRows={props.getNotesRows}/>
      <NotesDetails  currentNoteIndex={props.currentNoteIndex} notes={props.notes} markAsRead={props.markAsRead} />
    </div>
  );
}

export default Notes;