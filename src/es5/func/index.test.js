var envChecker = require('../../../deps/func');
var determineEnvironment = require('./');

jest.mock('../../../deps/func', function(){
    return ({
        IS_PROD: jest.fn(),
        IS_DEV: jest.fn(),
        IS_JEST: jest.fn()
    });
});

describe('es5 external dep mock of functions', function(){

    beforeEach(function(){
       jest.resetModules();
    });

   it('should return PROD on prod env', function(){
       envChecker.IS_PROD.mockImplementationOnce(function(){
            return true
        });
        expect(determineEnvironment()).toEqual('PROD');
   });
    it('should return DEV on non prod env', function(){
        envChecker.IS_PROD.mockImplementationOnce(function(){
            return false;
        });
        expect(determineEnvironment()).toEqual('DEV');
    });
    it('should return JEST on jest env', function(){
        envChecker.IS_JEST.mockImplementationOnce(function(){
            return true;
        });
        expect(determineEnvironment()).toEqual('TEST');
    });
});