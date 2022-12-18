import mongoose from 'mongoose'

const SchemaMongo = new mongoose.Schema({
    id: Number,
    userEmail: String,
    titulo: String,
    observacao: String,
    links: Array,
    marcadores: Array
})

export const notesMongo = mongoose.model("notes", SchemaMongo)