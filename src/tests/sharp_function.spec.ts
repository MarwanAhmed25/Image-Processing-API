import resize from '../utilites/sharp_function';


it('sharp function pass test',async()=>{
    
    const res = await resize('fjord',200,200);
    expect(res).not.toThrowError;
})

