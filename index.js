const express = require("express");//for invoke express package
const app = express();
const multer = require('multer');//for make the form data
const upload = multer(); // for non-file form data
app.use(express.json());// to use body parameter




app.get("/hello", (req, res) => {   //when the user visit the linke send him respnocse hello
    res.send("hello"); //send the respnose to the client
});
app.get("", (req, res) => { // this the base url of your project
    res.send("hello in my project");
});


app.get("/helloHtml", (req, res) => {
    //to process html file in js
    // res.sendFile(__dirname + '/views/hello.ejs');

    res.render('hello.ejs', {
        'name': 'tony',
    });
});

// path parameter this mean that you can take the paramerter from user in the link ,, you must add (:)  
app.get("/addNumber/:num1/:num2", (req, res) => {

    let num1 = req.params.num1;//they will come in string format 
    let num2 = req.params.num2;//you must convert to number first
    let result = Number(num1) + Number(num2);
    res.send(`the result : ${result}`);
});


//query parmeter
app.get("/sayHello", (req, res) => {
    // query parameters
    let name = req.query.name;
    let age = req.query.age;

    res.json({
        'name': name,
        'age': age,
    });
});

// body parameters must be post request 
app.post("/sayHelloBody", upload.none(), (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    res.json({
        message: `Hello ${name}, you are ${age} years old.`,
        name: name,
        age: age
    });
});

app.post("/lol", (req, res) => {
    res.send("post request");
});

app.listen(3000, () => { //listen to localhost:3000 , you must run node index.js first in terminal
    console.log("i am listening to port 3000");
});
//localhost3000/hello    will see the hello message