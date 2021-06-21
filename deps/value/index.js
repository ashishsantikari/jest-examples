var IS_JEST = process.env.NODE_ENV === 'test';

var IS_DEV = process.env.NODE_ENV === 'dev';

var IS_PROD = process.env.NODE_ENV === 'prod';

module.exports = {
    IS_DEV,
    IS_JEST,
    IS_PROD
};