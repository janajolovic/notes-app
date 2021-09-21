import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/notesList";

const App = () => {
  const [ notes, setNotes ] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "19/09/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "23/09/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "27/09/2021"
    },
  ])
  
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
