const express = require('express');

app = express();

// app.use((req,res,next) => {
//     console.log("First Middleware");   
//     next();
// });

// app.use((req,res,next) => {
//     console.log("Second Middleware"); 
//     res.send('<p>Assignment Sollved</p>');  
// });

app.use('/user',(req,res,next) =>{
    console.log("/user Middleware");
    res.send('<p> Page with /user</p>');
});

app.use('/',(req,res,next) =>{
    console.log("/ Middleware");
    res.sendFile('<p> Page with /user</p>');
});
app.listen(3000);