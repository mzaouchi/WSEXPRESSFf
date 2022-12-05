const express = require('express')

const app = express()

const port = 5000

var users = [
    {name : "Asma", old : 27, id : 1},
    {name : "Achref", old : 25, id : 2},
    {name : "Brahim", old : 21, id : 3},
    {name : "Mahmoud", old : 21, id : 4}
]

app.use(express.json())

app.get('/readUsers',(req,res)=>{
    res.send(users)
})

app.post('/addUser',(req,res)=>{
    users = [...users,req.body]
    res.send(users)
})

app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(el=> el.id != id)
    res.send(users)
})


app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(el=> el.id == id ? {...el,...req.body} : el)
    res.send(users)
})

app.listen(port,console.log(`Server is running on the port ${port}`))