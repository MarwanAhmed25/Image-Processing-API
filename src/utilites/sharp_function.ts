import sharp from 'sharp';


//async function to take input{the image} and get output{the resized image}
async function resizeImage(inputImage:string, outputImagePath:string, width:number, hieght:number){
    try{
        const image = await sharp(inputImage).resize(width,hieght).toFile(outputImagePath);
    }catch(e){
        console.log(`sharp function error: ${e}`);
    
    }
}

//export function to use in another files
export default {
    resizeImage
};