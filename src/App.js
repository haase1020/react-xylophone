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
        <NoteButton note={notes[0]}/>
        <button onClick={()=> new Audio(notes[0].file).play()}>c</button>
        <button>d1</button>
        <button>e1</button>
        <button>f</button>
        <button>g</button>
        <button>a</button>
        <button>b</button>
        <button>c2</button>
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
