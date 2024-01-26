import React from 'react';
import Header from './components/Header';
import Note from './components/note';
import notes from './notes';

function createNotes(noteEntry) {
  return <Note
  key={noteEntry.key}
  title={noteEntry.title}
  content={noteEntry.content}
  />
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      {/* <Note title="Note title"  content="Note contents"   /> */}
       </div>
  );  
}

export default App;
