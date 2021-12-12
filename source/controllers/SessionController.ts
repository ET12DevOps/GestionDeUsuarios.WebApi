import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Session } from '../entity/Session'

const getSessions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let logins = await getRepository(Session).find();
        res.send(logins);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default { getSessions }