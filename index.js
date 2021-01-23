const allure = require('allure-commandline');

// returns ChildProcess instance
const generation = allure(['generate', 'allure-results']);

generation.on('exit', (exitCode) => {
    console.log('Generation is finished with code:', exitCode);
});