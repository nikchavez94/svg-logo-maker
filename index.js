const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    svgString += "<g>";
    svgString += "${answers.shape}";


    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    }
    else if (answers.shape === "Square") {
        shapeChoice = new Square ();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    }
    else {
        shapeChoice = new Circle();
        svgString += `<circle cx="50" cy="50" r="40" fill="${answers.ShapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });

}

//Function prompts for user 
function promptUser() {
    inquirer
    .prompt ([
        {
            type: "input",
            message: "What would you like your logo to say? Enter three characters",
            name: "text",
        },
        {
            type: "input",
            message: "What color will your text be?",
            name: "textColor",

        },

        {
            type: "list",
            message: "What shape will your logo be?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
        },
        {
            type: "input",
            message: "What color will the shape of your logo be? Type the color or hexadecimal number.",
            name: "shapeBackgroundColor",
        },
    ])

    .then((answers) =>{
        if(answers.text.length > 3) {
            console.log("Too many characters - You need 3");
            promptUser();
        } 
        else {
            writeToFile("logo.svg", answers);
        }
    });
}

promptUser();