const express =require('express')
const bodyParser = require('bodyParser')
const app = express();
const port = 8000

app.use(bodyParser.json());
let users=[];
let counter =[];
app.get('/user',(req, res) =>{
    res.json(users)
})
app.post('/user',(req, res) =>{
let user=req.body;
user.id = counter
counter += 1;
users.push(user)
res.json({
    Message:'User',
    user:user});
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
app.listen(port, () =>{
    console.log('server is runing on port${port}')
});