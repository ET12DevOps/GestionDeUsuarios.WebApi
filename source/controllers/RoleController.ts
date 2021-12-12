import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Role } from '../entity/Role'

const getRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let roles = await getRepository(Role).find();
        res.send(roles);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let id: string = req.params.id;
        let role = await getRepository(Role).findOne(id);
        role ? res.send(role) : res.status(400).json({ message: `Rol con id ${id} no existe` })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const createRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let role = new Role();
        role.name = req.body.name;
        role.enabled = req.body.enabled;
        let userSaved = await getRepository(Role).save(role);
        res.send(userSaved);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const role = await getRepository(Role).findOne(id);
        if (role) {
            role.name = req.body.name;
            role.enabled = req.body.enabled;
            await getRepository(Role).save(role);
            let userSaved = await getRepository(Role).findOne(id);
            res.send(userSaved);
        } else {
            res.status(400).json({ message: `Rol con id ${id} no existe` })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const removeRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const role = await getRepository(Role).findOne(id);
        if (role) {
            await getRepository(Role).remove(role);
            res.send(role);
        } else {
            res.status(400).json({ message: `No se puede eliminar el rol con id ${id}` });
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default { getRoles, getRole, createRole, updateRole, removeRole }