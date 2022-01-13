import express from 'express';
import sharpFunction from './sharp_function';

//initial route to create the routes of file
const route = express.Router();

//get route to run the main get
route.get('/',(req,res)=>{
    res.send('image test');
    //include the sharp to resize the image from sharp_function
    // if(req.query){
    //     res.send(sharpFunction.resizeImage(input,output,req.query.width,req.query.hieght));
    // }
});

//export the route to use when importing the file
export default route;