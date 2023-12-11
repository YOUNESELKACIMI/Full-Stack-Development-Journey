const PersonForm = ({addNewPerson,newName,handlePersonAdd,newNumber,handleNumberAdd}) => {

    return (
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
    )
  }

  
export default PersonForm