import { notesMongo } from "../entity/notes";
import { Request, Response } from 'express'
import { usersMongo } from "../entity/user";

export async function NotesCreate(req: Request,res: Response) {
    const { email, titulo, observacao, links, marcadores } = req.body

    const searchNotes = await notesMongo.findOne({
        titulo: titulo
    })

    if(searchNotes) {
        return res.status(201).json("Essa nota ja esta sendo usada")
    }

    const resultNotes = await notesMongo.create({
        userEmail: email,
        titulo: titulo,
        observacao: observacao,
        links: links,
        marcadores: marcadores 
    })

    return res.json({msg: resultNotes})
}

export async function notesOne(req: Request,res: Response) {
    const {email} = req.body

    const allNotes = await notesMongo.find({
        userEmail: email
    })

    return res.json(allNotes)
}

export async function notesOneSpecific(req: Request,res: Response) {
    const {email, titulo} = req.body

    const allNotes = await notesMongo.find({
        userEmail: email,
        titulo: titulo
    })

    return res.json(allNotes)
}

export async function notesDelete(req: Request,res: Response) {
    const {email, titulo} = req.body

    const allNotes = await notesMongo.findOne({
        userEmail: email,
        titulo: titulo
    })

    await notesMongo.deleteOne({
        titulo: allNotes?.titulo
    })

    return res.json({msg: "ok"})
}