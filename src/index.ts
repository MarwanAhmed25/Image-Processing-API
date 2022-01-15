import express from 'express';
import route from './utilites/image_routes';

//initial port and app
const port = 3000;
const app = express();

//configre the server to listen to port and running it
app.listen(port, ():void=>{
    console.log(`srever running on port ${port}`);
});

//using middelware to get route of the image/api from another file
app.use('/image/api',route);

//export the app to use when importing the file
export default app;