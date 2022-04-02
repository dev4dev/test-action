const core = require('@actions/core');
const github = require('@actions/github');

async function main(name) {
    console.log(`Hello ${name}`);
    core.setOutput('poop', '💩');
}

const name = core.getInput("name");
main(name);