import { useState,useEffect } from "react"
import axios from 'axios'
import Note from "./components/Note"
import noteServices from './services/notes'



const App = () => {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(true)


  useEffect(()=>{
    console.log('effect')
    noteServices
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  },[])

  console.log('render',notes.length,'notes')

  const addNoteIndb = (event) => {
    event.preventDefault()
    console.log(event.target)
    const noteObject = {
      content:newNote,
      important:Math.random()<0.5,
    }

    noteServices
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })

  }


  const addNote = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id===id)
    const changedNote = {...note,importance:!note.importance}
    

    noteServices
      .update(id,changedNote)
      .then(returnedNote =>{
        setNotes(notes.map(note => note.id!=id?note:returnedNote))
      })

      .catch(error=>{
        alert(`the note '${note.content}' is already deleted from the server`)
        setNotes(notes.filter(note=>note.id!==id))
      })



  }


  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNoteIndb}>
        add new note: <input value={newNote} on onChange={addNote}/>
      </form>

      
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)}/>
        )}
      </ul>
    </div>
  )
}


export default App