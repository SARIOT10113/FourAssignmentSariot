const express =require('express')
const app = express();

app.use(express.json());

// HOME PAGE
app.get('/',(req,res)=>{
    res.send('<h1>I am home page</h1>')
})

// POST QUERY  API 
app.post('/query',(req,res)=>{
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    res.send(`My username is : ${username} ,email : ${email} and password : ${password}`)

})

// POST BODY  API 
app.post('/body',(req,res)=>{
    let allData = req.body
    res.end(JSON.stringify(allData))

})

// POST HEADERS  API 
app.post('/headers',(req,res)=>{
    let name = req.headers.name
    let roll = req.headers.roll
    let email = req.headers.email
    let mobile = req.headers.mobile
    let data =`
    Name : ${name}
    Roll : ${roll}
    Email : ${email}
    Mobile : ${mobile}
    `
    res.send(data)

})


const PORT =7000;
app.listen(PORT,()=>{
    console.log(`Server is runing at http://localhost:${PORT}`)
})