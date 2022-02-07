import {config} from 'dotenv'
config()
import cors from 'cors'
const {mongo, port, mode} = process.env

import { connect } from 'mongoose'
connect(mongo || 'mongodb://localhost:27017/your_db').then(()=>console.log('db ok')).catch(()=>console.log('failed db'))


import express from 'express'
import router from './routers/router'
import errHandler from './middlewares/errHandler'
import cookieParser from 'cookie-parser'
const {json} = express
const app = express()

app.use(cors({
    origin:mode === 'prod' ? 'https://mern-api.heroku.app' : 'http://localhost:3000'
}))
app.use(json())
// app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(router)
app.use(errHandler)


app.listen(port || 5001)
