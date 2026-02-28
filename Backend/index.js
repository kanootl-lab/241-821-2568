const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const app = express();
const port = 8000

app.use(bodyParser.json());
let users = [];
let counter = 1;
let conn = null
const initDBConnnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}


//path get
app.get('/users', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id=?', id)
        if (results[0].length == 0) {
            throw { statusCode: 404, message: 'User not found' }
        }
    } catch (error) {
        console.error('Error cereating', error.Message)
        let statusCode = error.statusCode
        res.status(statusCode).json({})
    }
    res.json(results[0][0])
})

//path post
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user)
        console.log('results', results)
        res.json({
            message: "User added successfully",
            data: results[0]
        })
    } catch (error) {
        console.error('Error cereating', error.Message)
        res.status(statusCode).json
    }
})

//path put
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body
        const results = await conn.query('SELECT * FROM users WHERE id= ?', [updatedUser, id])
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' }
        }
        res.json({
            message: 'User  update successfully',
            data: updatedUser
        })
    } 
    catch (error) {
        console.error('Error Updating', error.Message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'Error update user',
            error: error.message
        })
    }
})


app.delete('/users/:id',async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id= ?', id)
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' }
        }
        res.json({
            message: 'User  deleted successfully',
            data: updatedUser
        })
    } 
    catch (error) {
        console.error('Error delete', error.Message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'Error deleted user',
            error: error.message
        })
}
})
app.listen(port, async () => {
    await initDBConnnection();
    console.log(`server is runing on port  ${port}`)
});
