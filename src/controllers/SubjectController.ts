import { subjectRepository } from './../repositories/subjectRepository';
import { Request, Response } from "express";

export class SubjectController {
    async create(req: Request, res: Response){
        //criar disciplina

        const {name} = req.body

        if(!name) {  //possui bibliotecas para validações de requests
            return res.status(400).json({message: "O campo nome é obrigatório!"})
        }

        try {
            const newSubject = subjectRepository.create({ name }) ///criação da disciplina

            await subjectRepository.save(newSubject) ///persistencia no banco

            return res.status(201).json(newSubject); ///response
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error.'})
        }

    }
}