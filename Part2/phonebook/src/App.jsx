import { useState } from 'react'
import Person from './components/Person'

const App = () => {

    const [persons,setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName,SetNewName] = useState('')   
    const [newNumber,setNewNumber] = useState('') 
    const [newFilter,setNewFilter] = useState('')
  
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
      <form>
        <div>
          filter show with : <input value ={newFilter} onChange={handleFilter}/>
        </div>
      </form>
      <h2>add a new</h2>
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
        <ul>{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())===true).map(filteredPerson => <Person key = {filteredPerson.name} person={filteredPerson} />)}</ul>
      </div>
    </div>

  )

}

export default App