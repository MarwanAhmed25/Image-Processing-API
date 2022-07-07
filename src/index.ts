import express from 'express';
import path from 'path';
import route from './utilites/image_routes';
import Jimp from 'jimp';
import reader from 'xlsx';
//initial port and app
const port = 3000;
const app = express();

const d = [
'Twins',
'Hamel El Mesk',
'A2z Car Service',
'Dubai Car Care',
'Al meery Car wash',
'Al Awamery for accessories ',
'Pink&Blue ',
'Creative Kids academy ',
'Salon Adel&Aeed',
'Salon Adel&Aeed',
'Salon Adam',
'El-Masry Salon',
'salon El Masry (Men)',
'Beauty Center Ghada',
'Monzefat Tsahel',
'monzefat El-Zahry',
'Hyber Dream',
'DR. Brand',
'Pyramids Vet Clinic',
'Fharghaly Fruit ',
'Twins Dry Clean',
'Android store',
'Hai Phone',
'Moasst Zedan Store',
'dubai phone',
'Yakut Butik ',
'Ghodrawat Elhag Sayed',
'Gezart El-Waraqi',
'Gezart Mosaad',
'Khodrawat El-Faiomy',
'saltanah Bin&mukasirat',
'Al-Mardiniu Boun&Mexrat',
'muasasat Al-Bardawily lileitarh',
'Alban Al-Falaah',
'khair zaman ',
'Mazraet alban el reef',
'Gezart Yom Said',
'Zamzam',
'Etaret TAIPA',
'Etaret Taipa',
'Teuor El-Gezera',
'Teyor Wady El-Melouk',
'Badr El-Attar',
'khodrwat Al Ekhlas',
'Teyor Ganaa El Saaid ',
'khodrawat Ganet belqis',
'Zaen Decor Company',
'stars Studio',
'Al Andalus ',
'Dehant GLC Markz el farouk',
'Maghbozat Islam',
'Wonderland',
'El-Tabeeb Pharmacy',
'Dr Heba Sobhy Pharmacy',
'Dr.waled pharmacy ',
'Khan El Konafa',
'Hadbet El-Sham',
'Al-Embrator Matam',
'Asmak Hut Alex',
'Pizza Gedo',
'Asmak Al Fares',
'Pizza Royal',
'Kebda El-Rahma',
'City first',
'Vians Food',
'abo Alaa ',
'Swilam Group',
'Maktabty',
'Needs Market',
'Aswak Al-hamd',
'Muqilat Al-homsany',
'Al Raya Market ',
'Boska Sweet',
'Al Omaraa Group Oriental Weavers', 
'Al Omaraa Group Oriental Weavers', 
'zilzal',
'Al Anwar Al Mohamadya',
'Al Anwar Al Mohamadya',
'Silver House',
'Al Hadaba',
'Al Arzak market',
'Teuor El Omda',
'Teuor El Omda',
'Nada 4 Pets ( Pharmacy)',
'awlad Ramadan market ',
'Serag El Din pharmacy ',
'Alkouly Pharmacies ',
'Scope Vet Clinic',
'Alban tayb',
'Alban tayb',
'Karkeeb',
'Mazag Cafe',
'Ahmed Hassan sport ',
'Virginia Spa',

]


//configre the server to listen to port and running it
app.listen(port, ():void=>{
    console.log(`srever running on port ${port}`);
    
    
    d.map(async(s)=>{
        await imageOverlay(s);
    })
console.log("Image is processed successfully");
});

//using middelware to get route of the image/api from another file
app.use('/image/api',route);



  

async function imageOverlay(inp: string) { 

    inp=inp.trim()

   let watermark = await Jimp.read(path.join(process.cwd(), `logo.png`));
   watermark = watermark.resize(90,90); // Resizing watermark image
// Reading original image
   const image = await Jimp.read(path.join(process.cwd(), `images/${inp}.png`)); // image name
   watermark = await watermark
   image.composite(watermark, 105, 105, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: .7
   })
   await image.writeAsync(path.join(process.cwd(), `new_images/${inp}.png`));// out name
}





//export the app to use when importing the file
export default app;