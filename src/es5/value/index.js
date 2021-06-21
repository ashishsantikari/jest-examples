var envChecker = require('../../../deps/value');

function determineEnvironment() {
    if (envChecker.IS_JEST) return 'TEST';
    if (envChecker.IS_PROD) return 'PROD';
    return 'DEV';
}

module.exports = determineEnvironment;
