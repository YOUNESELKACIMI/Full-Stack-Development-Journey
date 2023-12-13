import { useState,useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'



const App = () => {

    const [persons,setPersons] = useState([])
    const [newName,SetNewName] = useState('')   
    const [newNumber,setNewNumber] = useState('') 
    const [newFilter,setNewFilter] = useState('')


  useEffect(()=>{
    console.log("Effect is taking place")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("promise fullfiled")
        setPersons(response.data)
      })


  },[])


  
  
  const addNewPerson = (event) => {
    event.preventDefault()
    console.log(event.target)

    const PersonObject = {
      name:newName,
      number:newNumber
    }

    console.log("the person object to be concated is = ",PersonObject)
  
    const PrecedentExistenceOfPerson = persons.filter(person => JSON.stringify(person)==JSON.stringify(PersonObject))
    if(PrecedentExistenceOfPerson.length==1){
      console.log("returned filtered array = ",PrecedentExistenceOfPerson,`${newName} is already added to phonebook`)
      alert(`${newName} is already added to phonebook`);
    }
    else {
      setPersons(persons.concat(PersonObject))
     
    }
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
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} addNewPerson={addNewPerson} handlePersonAdd={handlePersonAdd} handleNumberAdd={handleNumberAdd}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter}/>
    </div>

  )
}










export default App