import { useState } from 'react'
import Person from './components/Person'

const App = () => {

    const [persons,setPersons] = useState([{name:'Arto Hellas',number:'39-44-5323523'}])
    const [newName,SetNewName] = useState('')   
    const [newNumber,setNewNumber] = useState('') 

  
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
  
  console.log("new name is ",newName)
  console.log("new number is ",newNumber)
  console.log("persons array is  ",persons)

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addNewPerson}>
        <div>
          name : <input value={newName} onChange={handlePersonAdd} />
        </div>
        <div>
          number : <input value={newNumber} onChange={handleNumberAdd} />
        </div>
        <div>
          <button type = "submit">add</button>
        </div>
      </form>


      <h2>Numbers</h2>
      <div>
        <ul>{persons.map(person => <Person key = {person.name} person={person}/>)}</ul>
      </div>
    </div>

  )

}

export default App