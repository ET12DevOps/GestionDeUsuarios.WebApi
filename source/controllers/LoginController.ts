import { Request, Response, NextFunction } from 'express';

const postLogin = async (req: Request, res: Response, next: NextFunction) => {

    res.send({ credenciales: { username: req.body.username, password: req.body.password } });
}

export default { postLogin }