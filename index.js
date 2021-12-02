require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req, res)=>{
    res.json()[
        {id: 1, username: 'foo'},
        {id: 2, username: 'bla'},
        {id: 3, username: 'bla-bla'}

    ]
})

const PORT = process.env.PORT || 8080

server.listen (PORT, () =>{
    console.log(`listening on ${PORT}`)
})