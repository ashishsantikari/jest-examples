var IS_JEST = function() {
 return process.env.NODE_ENV === 'test';
}

var IS_DEV = function(){
    return process.env.NODE_ENV === 'dev';
}

var IS_PROD = function(){
    return process.env.NODE_ENV === 'prod';
}

module.exports = {
    IS_DEV,
    IS_JEST,
    IS_PROD
};