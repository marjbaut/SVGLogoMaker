
const inquirer = require("inquirer");
const fs = require('fs');
// const {Circle, Triangle, square} = require ('./lib/shapes')
const {Shape, Circle, Square, Triangle} = require('./lib/shapes')

// // class Svg{
// //     constructor(){
// //         this.textElement = ''
// //         this.shaperElement =''
// //     }
// //     render(){
// //         return `<svg version="1.1" width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
// //         <rect x='90' y='40' width='120' height='120' fill="black"/>
// //         </svg> `
// //     }
// //     setText(text,textColor){
// //         this.textElement=` <text x='150' y='125' fonst-size='60' text-anchor='middle' fill='${textColor}'>${text}
// //         </text>`
// //     }
// //     setShapeElement(shape){
// //         this.textElement=shape.render()
// //     }
// // }

// // {/* <svg version="1.1" width="300" height="200" xmlns='http://www.w3.org/2000/svg'><rect x='90' y='40' width='120' height='120' fill="black"/><text x='150' y='125' fonst-size='60' text-anchor='middle' fill='orange'>text</text></svg> */}


const questions = [
    {type:'input',
    name:'logoTxt',
    message:'Enter up to three characters to display in yor logo: '
    },
    {type:'input',
    name:'textColor',
    message:'Enter text color keyword (OR a hexadecimal number): ' 
    },
    {type:'input',
    name:'shapeColor',
    message:'Enter shape color keyword (OR a hexadecimal number): '
    },
    {
        type:'list',
        name:'logoShape',
        message:'Pick a shape for your logo: ',
        choices:['circle', 'triangle','square'],
        filter(val){
            return val.toLowerCase();
        }
    },
    ];

function askQuestion(){
    return inquirer.prompt(questions)
        .then( (answers)=>{
            const shapeInput = Shape.generateLogo(answers)
            fs.writeFile('logo.svg',shapeInput, function(err){
                if (err){
                    console.log('could not save',err)
                } else{
                    console,log('success')
                }
            }) 
        }
        )
        .catch((error)=>{
            console.log(error)
        })
}
askQuestion();