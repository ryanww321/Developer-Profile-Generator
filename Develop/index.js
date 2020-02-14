// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// ask the user questions and returns answers
function promptUser() {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "checkbox",
            message: "What languages do you know?",
            name: "stack",
            choices: [
                "HTML",
                "CSS",
                "JavaScript",
                "MySQL"
            ]
        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "contact",
            choices: [
                "email",
                "phone",
                "telekinesis"
            ]
        }
    ]);
}
// inserts the answers into new html
function generateHTML(answers) {
    // return `paste in html here ${answers.what's in the quotes}`
}
// starts entire app
async function init() {
    try {
        const userAnswers = await promptUser();
        const newHTML = generateHTML(userAnswers);
        await writeFileAsync("index.html", newHTML);
        console.log("Successfully created the file!");
    }
    catch (err) {
        console.log(err)
    }
}

init();