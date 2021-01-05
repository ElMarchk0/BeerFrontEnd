const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('./public/api/beersV1.json', (req, res) =>
    res.render('index', {
        title: 'Beer Api',
        beers
    })
);

// app.use('/api/beersV1.json', require('./public/api/beersV1.json'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));