import mongoose from 'mongoose'

const schemaMongo = new mongoose.Schema({
    nome: String,
    email: String,
    password: String,
})

export const usersMongo = mongoose.model("user", schemaMongo)