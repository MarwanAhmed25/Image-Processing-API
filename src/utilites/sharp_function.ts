import path from 'path';
import sharp from 'sharp';

let output: string;

async function resize(input: string, w: number, h: number): Promise<void> {
    try {
        const inputPath: string = path.join(process.cwd(), `images/${input}.jpg`);

        output = path.join(process.cwd(), `resized_images/resized_${input}.jpg`);

        await sharp(inputPath).resize(w, h).toFile(output);
    } catch (e) {
        console.log(e);

        throw new Error(`${e}`);
    }
}

export default resize;
