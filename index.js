const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

getData();

async function getData(data) {

    let questions = [{
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your repo's title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your repo's description?"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "What is your table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install?"
    }, 
    {
        type: "input",
        name: "usage",
        message: "Tell me about your usage:"
    }, 
    {
        type: "input",
        name: "license",
        message: "Are you distributed under the MIT license or something else?"
    }, 
    {
        type: "input",
        name: "contributions",
        message: "What contributions do you plan on making to help out your community of fellow developers?"
    }, 
    {
        type: "input",
        name: "tests",
        message: "How did you test your website functionality?"
    }]

    try {
        const { username, title, description, tableOfContents, installation, usage, license, contributions, tests} = await inquirer.prompt(questions);

        let { data } = await axios.get(`https://api.github.com/users/${username}`)

        await writeFileAsync("readme1.md", `
        ## GitHub Username: ${username}
        ## Email: ${data.email}
        # Bio Image: ${data.avatar_url}
        # Repo Title: ${title}
        ## Repo Description: ${description}
        ## Table of Contents: ${tableOfContents}
        ## Installation: ${installation}
        ## Usage: ${usage}
        ## License: ${license}
        ## Contributions: ${contributions}
        ## Tests: ${tests}
        `)

    } catch (err) {
        console.log(err);
    }
}
