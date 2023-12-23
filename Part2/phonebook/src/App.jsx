import { useState,useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personServices from './services/persons'
import axios from 'axios'


const Notification = ({message}) => {



  if(message==null) {
    return null
  }

  return(
    <div className='error'>
      {message}
    </div>
  )

}



const App = () => {

    const [persons,setPersons] = useState([])
    const [newName,SetNewName] = useState('')   
    const [newNumber,setNewNumber] = useState('') 
    const [newFilter,setNewFilter] = useState('')
    const [errorMessage,SetErrorMessage] = useState(null)



  useEffect(()=>{
    console.log("Effect is taking place")
     personServices
     .getAll()
     .then(initialPersons=>{
      setPersons(initialPersons)
     }) 
  },[])

  console.log("render",persons.length,"person")
  
  
  const addNewPerson = (event) => {
    event.preventDefault()
    const url = 'http://localhost:3001/persons'
    console.log(event.target)

    const PersonObject = {
      name:newName,
      number:newNumber
    }

    console.log("the person object to be concated is = ",PersonObject)
  
    if (persons.some(e => e.name === PersonObject.name)) {
      //console.log('trueeeeee')
      //alert(`${newName} is already added to phonebook do you want to change its number`);
      
      SetErrorMessage(`${newName} is already added to phonebook do you want to change its number`)

      setTimeout(()=>{
        SetErrorMessage(null)
      },5000)
      
      
      const existingPerson = persons.find(person=>person.name==PersonObject.name)
      const id = existingPerson.id
      console.log("existing Person = ",existingPerson)
      personServices
        .update(existingPerson.id,PersonObject)
        .then(returnedPerson=>{
          setPersons(persons.map(person=>person.id===id?returnedPerson:person))
      
        })
        .catch(error=>{
        
          SetErrorMessage(`Information of '${newName}' has already been deleted from the server`)        
          console.log("404 error handling here")
  
          setTimeout(()=>{
            SetErrorMessage(null)
          },5000)
  
          //setPersons(persons.filter(persons=>note.id!==id))
        })
  

    }
    else {
        console.log('the create method is Here')
        personServices
          .create(PersonObject)
          .then(returnedPerson=>{
            console.log("response data from the post method is ",returnedPerson)
            setPersons(persons.concat(returnedPerson))
          })

        SetNewName('')
        setNewNumber('')    
    }
  }

  const handleRemovePerson = (id) =>{
    console.log("attempt to delete a person inside handleRemovePerson")
    personServices
      .remove(id)
      .then(returnedPerson=>{
        setPersons(persons.filter(person=>person.id!==id))
      })
  }




  const handlePersonAdd = (event) => {
    console.log("event value in the person event handler",event.target.value)
    SetNewName(event.target.value)
    
  } 

  const handleNumberAdd = (event) => {
    console.log("event value in the number event handler",event.target.value)
    setNewNumber(event.target.value)
  }
  
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  console.log("new name is ",newName)
  console.log("new number is ",newNumber)
  console.log("persons array is  ",persons)

  return(
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} addNewPerson={addNewPerson} handlePersonAdd={handlePersonAdd} handleNumberAdd={handleNumberAdd}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} remove={handleRemovePerson}/>
    </div>
  )
}










export default App