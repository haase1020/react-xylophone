import React, { useState } from 'react';
import notes from './assets/notes.js';
import './App.scss';
import { jsxExpressionContainer } from '@babel/types';


const NoteButton = (props) =>{
  // console.log("PROPS1", props)
 

  return(
    <button 
    className="note-button"
    style={{height:(200-(15*props.index)) +'px' }}
    onClick={()=> {
      // props.playedNotes.push(props.note);
      console.log("props.playedNotes",props.playedNotes);
      // props.setPlayedNotes([...props.playedNotes,props.note]);
      props.addPlayedNote(props.note);
      new Audio(props.note.file).play();
    }}>
      <div className= "circle"/>
      {props.note.name}
      <div className= "circle"/>
    </button>
  )
};
//<Notebutton something="1" /> is the component name, then the props key name and value
function App() {
  const [playedNotes, setPlayedNotes] = useState([]);

  const replayNotes = () =>{
    playedNotes.map((note, index)=>{
      window.setTimeout(() => new Audio(note.file).play(), 500 * index);
    });
  };

  const resetNotes = () =>{
    setPlayedNotes([]);
  };

  const addPlayedNote =(note) =>{
    setPlayedNotes([...playedNotes, note])
  }

  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      < div className="xylophone">
        {JSON.stringify(playedNotes)}
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
       {notes.map((noteOb, index) => (
       <NoteButton 
       index={index}
       addPlayedNote = {addPlayedNote}
       key={noteOb.name} 
       note={noteOb} 
       />
       ))}

        
      </div>
      {JSON.stringify(playedNotes)}
      <button onClick={() => replayNotes()}>Replay</button>
      <button onClick={() => resetNotes()}>Clear</button>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
