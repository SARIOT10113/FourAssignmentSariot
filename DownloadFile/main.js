const express = require('express');
const app = new express();



// HOME ROUTE
app.get('/',(req,res)=>{
    res.end('<h1>I am home route</h1>')
    
});

// DOWNLOAD FILE API 
app.get('/download',(req,res)=>{
    res.download('./file/images.jpg',(error)=>{
     if(error){
        console.log(`Download File Fail ${error}`)
     }else{
        console.log(`Download File Successfully`)
     }
    })
})

// RESPONSE REDIRECT  FILE 
app.get('/father',(req,res)=>{
    res.redirect('http://localhost:5000/son')
})
app.get('/son',(req,res)=>{
    res.send('<h1>I son router refer from fahter</h1>')
})

const PORT = 7000;
app.listen(PORT,()=>{
    console.log(`Server is runing at http://localhost:${PORT}`)
})