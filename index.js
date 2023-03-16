import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import path from 'path'
import https from 'https'
import * as fs from 'fs'
import { fileURLToPath } from 'url'

import errorMiddleware from './middleware/error-middleware.js'

import authRouter from './router/auth-router.js'
import apiRouter from './router/api-router.js'
import userRouter from './router/user-router.js'

dotenv.config()

const options = {
  cert: fs.readFileSync('./sslcert/supershaurma.ru.crt'),
  key: fs.readFileSync('./sslcert/supershaurma.ru.key'),
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 5000
const PORT_SSL = process.env.PORT_SSL || 5443

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
)
app.use('/static', express.static(path.resolve(__dirname, 'uploads')))
app.use('/api/v1/', apiRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use(errorMiddleware)

const startApp = () => {
  try {
    mongoose.set('strictQuery', true).connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()

https.createServer(options, app).listen(PORT_SSL)
