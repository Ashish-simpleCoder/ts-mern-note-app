import {config} from 'dotenv'
config()
import cors from 'cors'
const {MONGO, PORT, MODE} = process.env

import { connect } from 'mongoose'


import express, { urlencoded } from 'express'
import router from './routers/router'
import errHandler from './middlewares/errHandler'
import cookieParser from 'cookie-parser'
const {json} = express
const app = express()

console.log(MODE)

if(MODE === 'prod'){
    const {join} = require('path')
    // console.log(join(__dirname,'../',"client/build"))
    app.use(express.static(join(__dirname,'../', 'client/build')))
    connect(MONGO || 'mongodb://localhost:27017/your_db').then(()=>console.log('db ok')).catch(()=>console.log('failed db'))
 }


app.use(cors({
    origin:['http://localhost:3000', 'https://ts-mern-note-app.herokuapp.com'],
    credentials:true,
    methods:['GET','POST','DELETE', 'PATCH', 'PUT']
}))
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(router)
app.use(errHandler)


app.listen(PORT || 5001)
