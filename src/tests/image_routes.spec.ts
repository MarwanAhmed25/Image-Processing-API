import route from '../index';
import supertest from 'supertest';

//suite for endpoint image/api for passing 200 ok and 404 not fount
const api = supertest(route);
describe('endpoint /image/api test', ()=>{
    it('request the /image/api pass with 200 ok',async () => {
        const res = await api.get('/image/api?filename=encenadaport&width=500&height=205');
        expect(res.status).toBe(200);
        
    }),
    it('request the /image/api pass with 404',async () => {
        const res = await api.get('/image/api');
        expect(res.status).toBe(404);
        
    })
});


//http://localhost:3000/image/api?filename=encenadaport&width=500&height=205