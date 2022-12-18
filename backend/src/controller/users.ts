import { usersMongo } from '../entity/user'
import { Request, Response } from 'express'

export async function createUser(req: Request, res: Response) {

    const {nome, email, password} = req.body

    const userExist = await usersMongo.find({
        nome: nome
    })

    if(nome == "" || nome == null) {
        return res.status(201).json({msg: "nome nao pode ser vazio!"})
    }

    if(userExist[0]) {
        console.log(userExist)
        return res.status(201).json({msg: "user ja foi criado!"})
    }

    const newuser = await usersMongo.create({
        nome: nome,
        email: email,
        password: password
    })

    return res.status(200).json({newuser})
}

export async function usersOne(req: Request, res: Response) {
    const {email, password} = req.body

    const searchUser = await usersMongo.findOne({
        email: email,
        password: password
    })

    if(searchUser == null) {
        return res.status(201).json("user not exist")
    } else {
        return res.json(searchUser)
    }
}
