import * as React from 'react';
import { types } from './types';
/* TODO some rendering bugs in here when list is empty */

function NotesDetails(props: types['NotesDetailsProps']) {
  return (
    <div className='NotesDetailsContainer'>
      <section className='NoteDetails'>
        {props.notes.length && (
          <h3 className='NoteDetails-title'>
            {props.notes[props.currentNoteIndex].subject}
          </h3>
        )}
        {props.notes.length && (
          <p className='NoteDetails-subject'>
            {props.notes[props.currentNoteIndex].body}
          </p>
        )}
        <button onClick={props.markAsRead}>Mark as read</button>
      </section>
    </div>
  );
}

export default NotesDetails;