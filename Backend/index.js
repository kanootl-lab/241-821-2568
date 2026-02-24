const express =require('express')
const bodyParser = require('body-parser')
const mysql=require('mysql2/promise')
const app = express();
const port = 8000

app.use(bodyParser.json());
let users=[];
let counter =1;
let conn=null
const initDBConnnection = async() => {
    conn =await mysql.createConnection({
        host: 'localhost',
            user: 'root',      
            password: 'root',  
            database: 'webdb',
            port: 8821 
    })
}


//path get
app.get('/users',async (req,res)=>{
    const results=await conn.query('SELECT * FROM users')
    res.json(results[0])
})

app.post('/users',async(req, res) =>{
let user = req.body;
const results=await conn.query('INSERT INTO users SET ?',user)
console.log('results',results)
res.json({
    message:"User added successfully",
    data: results[0]
 })
})
app.put('/user',(req, res) =>{
    let id = req.params.id;
    let updateUser = req.body
    let seletedindex = users.findIndex(user => user.id == id)
    if(updateUser.email){
          users[seletedindex].email=updateUser.email;
    }
    if(updateUser.name){
          users[seletedindex].name=updateUser.name;
    }
    res.json({
        Message:' user successfully',
        data :{
            users: updateUser,
            indexupdated : seletedindex
        }
    })
    })
    app.delete('/user',(req, res) =>{
        let id = req.params.id;
        let seletedindex = users.findIndex(user => user.id == id)
        delete users[seletedindex]
        res.json({
            Message:'user delete successfully',
            indexdelete:seletedindex
        })
    })
app.listen(port,async() =>{
    await initDBConnnection();
    console.log('server is runing on port${port}')
});