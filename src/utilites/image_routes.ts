import express from 'express';
import path from 'path';
import resize from './sharp_function';
import fs from 'fs';

//initial route to create the routes of file
const route: express.Router = express.Router();

//get route to run the main get
route.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const fileName: unknown = req.query.filename;
        const width: unknown = req.query.width;
        const height: unknown = req.query.height;

        const file: string = fileName as string;
        const w: number = parseInt(width as string);
        const h: number = parseInt(height as string);

        const image: string = path.join(
            process.cwd(),
            `resized_images/resized_${fileName}.jpg`
        );

        if (fs.existsSync(image)) {
            res.status(200).sendFile(image);
        } else {
            try {
                await resize(file, w, h);

                res.status(200).sendFile(image);
            } catch (e) {
                res.status(404).send(`${e}`);
            }
        }
    }
);

//export the route to use when importing the file
export default route;
