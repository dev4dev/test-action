const core = require('@actions/core');
const github = require('@actions/github');
const octokit = github.getOctokit(core.getInput('token'));

async function main(name) {
    console.log(`Hello ${name}`);
    core.setOutput('poop', '💩');

    await octokit.rest.pulls.create({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        title: `Hello ${name}`,
        body: "Lorem shitsum "
    });
}

const name = core.getInput("name");
main(name);
