
// this file needs contents in order to be treated as a module by typescript with the '--isolatedModules' flag, you may delete these unused contents
interface Note {
  subject: string;
  body: string;
  read: boolean;
}

interface State  {
  notes: Note[];
  currentNoteIndex: number;
  unread: number,
}

interface NotesSidebarProps {
  getNotesRows: () => any;
}

interface HeaderProps {
  unread: number;
}

interface NotesProps {
  getNotesRows: () => any
  currentNoteIndex: number
  notes: Note[];
  markAsRead: () => any
}

interface NotesDetailsProps {
  currentNoteIndex: number
  notes: Note[]
  markAsRead: () => any
}

export interface types {
  Note: Note
  State: State
  NotesSidebarProps: NotesSidebarProps
  HeaderProps: HeaderProps
  NotesProps: NotesProps
  NotesDetailsProps: NotesDetailsProps
};