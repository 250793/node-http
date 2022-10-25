//import express from 'express';
function removeItem(arr, prop, value) {
    return arr.filter(i => i[prop] !== value);
}

const express = require('express');
const app = express();

let books = [
    { _id: 1, title: 'Harry Potter 1', autor: 'J.K. Rowling', favorito: true },
    { _id: 2, title: 'Harry Potter 2', autor: 'J.K. Rowling', favorito: false },
    { _id: 3, title: 'Harry Potter 3', autor: 'J.K. Rowling', favorito: true }
];

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        nome: 'Plínio'
    })
});

app.get('/html', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const id = +(req.params.id);
    const book = books.find(book => book._id === id);
    if (book) {
        res.send(book);
    } else {
        res.sendStatus(404);
    };
});

app.post('/books', (req, res) => {
    const body = (req.body);
    if (Array.isArray(body)) {
        body.map(obj => books.push(obj));
    } else {
        books.push(req.body);
    }
    res.send(books);
})

app.delete('/books/:id', (req, res) => {
    let id = +(req.params.id);
    let index = books.findIndex(obj => obj._id === parseInt(id));
    if (index) {
        res.send(index)
    } else {
        res.sendStatus(404)
    }

    console.log('index', index)

    books.splice(index, 1)

    res.send(books);
});

/* app.patch('/books/:id', (req,res)=>{

}); */

app.patch('/books/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let book = books.find(obj => obj._id === id)
    console.log('book:', book)

    let body = req.body
    console.log('body:', body)

    book.title = body.title
    //res.send(book)
    
    res.send(books)


})
// const hostname = '192.168.2.26';
// app.listen(3000, hostname);
app.listen(3000);