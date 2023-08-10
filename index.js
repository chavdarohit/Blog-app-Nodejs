


// function getroll()
// {
//     const p = new Promise((resolve,reject)=>{
//         const rollno=[1,2,3,4,5];
//         resolve(rollno);
//     });

//     return p;

// }



// function getdetails(rn)
// {
//     const p = new Promise((resolve,reject)=>{
//         const details = {
//             name: "Rohit",
//             age :22
//         }

//         if(rn === 1)
//             setTimeout(resolve(details),2000);
//         else    
//             reject("The roll is not correct");    

//     });

//     return p;

// }

// async function data()
// {

//         const roll = await getroll();
//         const details =getdetails(roll[1]);
//         // details.catch((err)=>console.log(err));

//         details.then((x)=> console.log(x.name +"  "+x.age)).catch((x)=> console.log(x));
// }

// data();
// // ------------------------------------------------------------------------
// const fs = require('fs');
// // 
// if (!fs.existsSync('C:/Users/rohit/Desktop/New1.txt')) {
//     fs.writeFile('C:/Users/rohit/Desktop/New1.txt', 'hello rc i came from node', () => {
//         console.log("File written successfully")
//     });
// }
// fs.readFile('C:/Users/rohit/Desktop/New1.txt', (err, data) => {
//     if (err)
//         console.log(err);
//     console.log(data.toString());
// });

// // fs.appendFile('C:/Users/rohit/Desktop/New1.txt', 'hello rc i came from node', () => {
// //      console.log("File written successfully"));

// if(!fs.existsSync('./Test'))
//     fs.mkdir('./Test',(err)=> {if(err) console.log(err)})
// else
//     fs.rmdir('./Test',(err)=> {if(err) console.log(err)})

//-----------------------------------------------

// const http = require('http');

// const server = http.createServer(
//     (req, res) => {
//         console.log(req.url, req.method)
//         res.setHeader('content-type','text/html');
//         res.write("<h1>hii rc</h1>");
//         res.end();
//     });


// server.listen(3000, 'localhost', () => {
//     console.log("listening");
// })


//------------------------
// Creating html file and sending the response to the file

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('content-type', 'text/html');

    console.log(req.url);
    let path = './';
    switch (req.url) {
        case '/':
            path += 'Pages/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'Pages/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '.Pages/about');
            res.end();
            break;

        default:
            path += 'Pages/404error.html';
            res.statusCode = 404;
            break;

    }

    fs.readFile(path, (err, data) => {
        if (err) {
            // console.log()
            res.end(err);

        } else {
            // res.write(data);
            res.end(data);

            // console.log("Data loaded");
        }
    });


});

server.listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("listening from the port 3000");
});

