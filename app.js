const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log("we are listening....")
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.url);
    res.sendFile('./Pages/index.html',{root:__dirname})
    // res.send("<h1>Hii i am from Express welcome</h1>");
})

app.get('/about.html', (req, res) => {
    console.log(req.url);
    res.sendFile('./Pages/about.html',{root:__dirname})
    // res.send("<h1>About section </h1>");
}) 

app.use((req,res)=>{
    res.status(404).sendFile('./Pages/404error.html',{root:__dirname});
})
