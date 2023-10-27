const express = require('express');

var cors = require('cors');
const sequelize = require('./util/database')

const port = 3000;
const app = express()
app.use(cors())

const userRouter = require('./routes/user')
// console.log(userRouter);

app.use(express.json())
app.use(userRouter);

sequelize
    .sync()
    .then(result => {
        // console.log(result)
        app.listen(port, ()=> {
            console.log(`Server is running on port ${port}`)
        });
    })
    .catch(err => {
        console.log(err)
    })


