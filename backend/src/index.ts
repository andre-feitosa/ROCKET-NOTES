import Express from 'express'
import moongose from 'mongoose'
import routes from './routes'
import cors from 'cors'
import "reflect-metadata"

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({extended: false}))
app.use(routes)

moongose.connect("mongodb+srv://andre:RWeOZgjBkxIhzcN5@cluster0.7xi6sut.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("Mongoose foi conectado!")})
.catch((err)=>{console.log(err)})

app.listen(3336, ()=>{
    console.log("Database rodando")
})
