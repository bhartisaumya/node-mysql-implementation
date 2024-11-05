import express from 'express'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}));

import {getNotes, insertNotes} from './databases'

app.get('/:id', async(req, res) => {
    try {
        const id: number = parseInt(req.params.id)

        const result = await getNotes(id)

        res.status(201).json(result)
        
    } catch (error) {
        console.log(error)
    }
    
})

app.post('/', async(req, res) => {
    try {
        const {title, contents} = req.body


        console.log(contents)

        const result = await insertNotes(title, contents)

        res.status(201).json(result)
        
    } catch (error) {
        console.log(error)
    }
    
})

app.listen(8080)