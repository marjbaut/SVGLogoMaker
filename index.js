const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
// const {Circle, Triangle, square} = require ('./lib/shapes')
const {Circle, Square, Triangle }= require('./lib/shapes')
const svggenerator= require('./lib/svggenerator');

const questions = [
    {type:'input',
    name:'text',
    message:'Enter up to three characters to display in yor logo: '
    },
    {type:'input',
    name:'color',
    message:'Enter text color keyword (OR a hexadecimal number): ' 
    },
    {type:'input',
    name:'shapeColor',
    message:'Enter shape color keyword (OR a hexadecimal number): '
    },
    {
    type:'list',
    name:'shape',
    message:'Pick a shape for your logo: ',
    choices:['circle', 'triangle','square'],
    },
    ];
let shape;
function askQuestion(){
    return inquirer.prompt(questions)
        .then( (answers)=>{
            switch(answers.shape){
                case 'circle':
                    shape = new Circle();
                    break;
                case 'square':
                    shape = new Square();
                    break;
                case 'triangle':
                    shape = new Triangle();
                    break;
            }

    const svg = new svggenerator.SVG();
svg.setText(answers.text, answers.color);
shape.setColor(answers.shapeColor);
svg.setShape(shape);

    const svgString = svg.render();
    return writeToFile("logo.svg", svgString)        
        })

    function writeToFile(fileName, data) {
        fs.writeFile (fileName, data, (err) => {
            if (err)
            return console.log(err);
            else {
                console.log("Success! Generated logo.svg");
            }
        });
    }
    writeToFile (svggenerator.SVG, svgString);

    }


askQuestion();


   


