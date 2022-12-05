const express = require('express')

const app = express()

const port = 5000

const MiddleWare=(req,res,next)=>{
    console.log('Hello Asma')
    next()

}

app.use(MiddleWare)

app.get('/brahim',(req,res)=>{
    res.send('Achref')
})

// app.get('/asma',(req,res)=>{
//     res.send('<h1>AMINE</h1>')
// })

// app.get('/dar',(req,res)=>{    
//     res.sendFile(__dirname+'/public/Home.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/public/style.css')
// })

// app.get('/Rayhana',(req,res)=>{
//     res.sendFile(__dirname+'/public/')
// })

app.use(express.static('public'))

app.listen(port,console.log(`Server is running on the port ${port}`))