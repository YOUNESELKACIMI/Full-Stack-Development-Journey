console.log("hello world")

const express = require('express')
const app= express()


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/info',(request,response)=>{
    const currentTime = new Date().toLocaleString()
    const length = persons.length 
    response.send(`<p>Phonebook has info for ${length} people</p><br/><p>${currentTime}</p>`)
})


app.get('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id)
    const person = persons.find(person=>person.id===id)
    if(!person) {
        return response.status(404).json({
            error:"person not found"
        })
    }
    response.json(person)
})


app.delete('/api/persons/:id',(req,res)=>{
    const id = Number(req.params.id)
    persons = persons.filter(person=>person.id!==id)
    console.log("this is the updated persons after deletion",persons)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})