import * as React from 'react';
import { types } from './types';
/* TODO this section should be rendered as a sidebar, left of the NoteDetails, taking up
the full height of the space beneath the header. */

function NotesSidebar(props: types['NotesSidebarProps']) {
  return (
    <div className='NotesSidebarContainer'>
      <section className='NotesSidebar'>
        <h2 className='NotesSidebar-title'>Available Notes:</h2>
        <div className='NotesSidebar-list'>{props.getNotesRows()}</div>
      </section>
    </div>
  );
}

export default NotesSidebar;