import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User'

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let users = await getRepository(User).find();
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let id: string = req.params.id;
        let user = await getRepository(User).findOne(id);
        user ? res.send(user) : res.status(400).json({ message: `Usuario con id ${id} no existe` });
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let user = new User();
        user.username = req.body.username;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.enabled = req.body.enabled;
        let userSaved = await getRepository(User).save(user);
        res.send(userSaved);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const user = await getRepository(User).findOne(id);
        if (user) {
            user.username = req.body.username;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.password = req.body.password;
            user.enabled = req.body.enabled;
            await getRepository(User).save(user);
            let userSaved = await getRepository(User).findOne(id);
            res.send(userSaved);
        } else {
            res.status(400).json({ message: `Usuario con id ${id} no existe` })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const removeUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const user = await getRepository(User).findOne(id);
        if (user) {
            await getRepository(User).remove(user);
            res.send(user);
        } else {
            res.status(400).json({ message: `No se puede eliminar el usuario con id ${id}` });
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default { getUsers, getUser, createUser, updateUser, removeUser }