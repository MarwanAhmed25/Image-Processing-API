import path from 'path';
import sharp from 'sharp';

let output: string;

async function resize(input: string, w: number, h: number): Promise<void> {
    try {
        console.log(w,h,input);
        
        const inputPath: string = path.join(process.cwd(), `images/${input}.png`);
        console.log(inputPath);

        output = path.join(process.cwd(), `images/resized_${input}.png`);

        await sharp(inputPath).resize(w, h).toFile(output);
    } catch (e) {
        console.log(e);

        throw new Error(`${e}`);
    }
}



export default resize;
