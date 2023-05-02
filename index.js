
const inquirer = require("inquirer");
// const fs = require('fs');
// const {Circle, Triangle, square} = require ('./lib/shapes')

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


// // inquirer.prompt([
// //     {type:'input',
// //     name:'logoTxt',
// //     message:'Enter up to three characters to display in yor logo: '
// //     },
// //     {type:'input',
// //     name:'textColor',
// //     message:'Enter text color keyword (OR a hexadecimal number): ' 
// //     },
// //     {type:'list',
// //     name:'logoShape',
// //     message:'Pick a shape for your logo: ',
// //     choice: ['circle', 'triangle','square'] 
// //     },
// //     {type:'input',
// //     name:'shapeColor',
// //     message:'Enter shape color keyword (OR a hexadecimal number): '
// //     },
// //     ])
// //     .then((answers)=>
// //     console.log(answers));

const questions = [
    {type:'input',
    name:'logoTxt',
    message:'Enter up to three characters to display in yor logo: '
    },
    {type:'input',
    name:'textColor',
    message:'Enter text color keyword (OR a hexadecimal number): ' 
    },
    {type:'list',
    name:'logoShape',
    message:'Pick a shape for your logo: ',
    choice: ['circle', 'triangle','square'] 
    },
    {type:'input',
    name:'shapeColor',
    message:'Enter shape color keyword (OR a hexadecimal number): '
    },
];


// function writeToFile(fileName, data){
//     console.log("test")
//     fileSystem.writeFile(fileName, data,function(err){
//         if(err){
//             return console.log(err);
//         }else{ console.log("created a svg file");
//     }});
// }


function askQuestion(){
    return inquirer.prompt(questions)
        .then( (answers)=>
        { console.log('answers')
            const a = ShapesInput.generateLogo(answers)
            fs.writeFile('logo.svg',a, function(err){
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