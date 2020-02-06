import React, { useState } from 'react';
import notes from './assets/notes.js';
import './App.scss';


const NoteButton = (props) =>{
  console.log("PROPS1", props)
 

  return(
    <button 
    className="note-button"
    onClick={()=> {
      // props.playedNotes.push(props.note);
      console.log("props.playedNotes",props.playedNotes);
      props.setPlayedNotes([...props.playedNotes,props.note]);
      new Audio(props.note.file).play();
    }}>
      {props.note.name}
    </button>
  )
};
//<Notebutton something="1" /> is the component name, then the props key name and value
function App() {
  const [playedNotes, setPlayedNotes] = useState([]);

  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      < div className="xylophone">
        {JSON.stringify(playedNotes)}
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
       {notes.map(noteOb => (
       <NoteButton 
       playedNotes={playedNotes}
       setPlayedNotes = {setPlayedNotes}
       key={noteOb.name} 
       note={noteOb} 
       />
       ))}

        
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
