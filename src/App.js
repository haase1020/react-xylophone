import React from 'react';
import notes from './assets/notes.js';
import './App.scss';


const NoteButton = (props) =>{
  console.log("PROPS1", props)
  return(
    <button onClick={()=> new Audio(props.note.file).play()}>
      {props.note.name}
    </button>
  )
};
//<Notebutton something="1" /> is the component name, then the props key name and value
function App() {
  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      < div className="xylophone">
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
       {notes.map(note => <NoteButton note={note} />)}
        
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
