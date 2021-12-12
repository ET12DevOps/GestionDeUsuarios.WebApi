import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import "reflect-metadata";
import { createConnection } from "typeorm";
import userRoutes from './routes/UserRoute';
import roleRoutes from './routes/RoleRoute';
import sessionRoutes from './routes/SessionRoute';
import loginRoutes from './routes/LoginRoute';

const router: Express = express();

/** Logging requests y respons*/
router.use(morgan('dev'));

/** Interpreta el request en la codificacion correcta */
router.use(express.urlencoded({ extended: false }));

/** Leer informacion en el body del request, objeto JSON */
router.use(express.json());

/** Rutas de los controllers */
router.use('/', userRoutes);
router.use('/', roleRoutes);
router.use('/', sessionRoutes);
router.use('/', loginRoutes);

/** Manejo de errores, ante ausencia del controller y/o endpoint*/
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

createConnection().then(async connection => {

    /** Configuracion del server */
    const httpServer = http.createServer(router);
    const PORT: any = process.env.PORT ?? 3000;
    httpServer.listen(PORT, () => console.log(`El server esta escuchando en el puerto ${PORT}`));


}).catch(error => console.log(error));
