
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const morgan = require('morgan');
const { readdirSync } = require('fs');
const cors = require('cors')
// const authRouter = require('./routers/auth')
// const userRouter = require('./routers/user')


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

// app.use('/api',authRouter)
// app.use('/api',userRouter)
readdirSync('./routers')
.map((c)=> app.use('/api',require('./routers/'+c)))

app.listen(5000,()=>console.log('Server is running on port 5000'));