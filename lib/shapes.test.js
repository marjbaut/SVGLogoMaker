const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', ()=>{
    it('ckeck circle return correctly',()=>{
        const shape =new Circle();
       
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" fill="blue" />`);
    });
});
describe('Triangle', ()=>{
    it('ckeck circle return correctly',()=>{
        const shape =new Triangle();

        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue" />`);
    });
});
describe('Square', ()=>{
    it('ckeck circle return correctly',()=>{
        const shape =new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x=50  width="200" height="200" fill="blue" />`);
    });
});