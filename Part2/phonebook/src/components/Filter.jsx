const Filter = ({newFilter,handleFilter}) => {


    return (
    <form>
      <div>
        filter show with : <input value ={newFilter} onChange={handleFilter}/>
      </div>
    </form>
  
    )
  
}

export default Filter