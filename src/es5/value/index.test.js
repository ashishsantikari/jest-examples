describe('es5 external dep mock of values', function(){
    beforeEach(function(){
        jest.resetModules();
    })
    it('should return PROD on prod env', function(){
        jest.mock('../../../deps/value', () => ({
            IS_PROD: true,
            IS_JEST: false,
            IS_DEV: false
        }));
        var determineEnvironment = require('./');
        expect(determineEnvironment()).toEqual('PROD');
    });
    it('should return DEV on non prod env', function(){
        jest.mock('../../../deps/value', () => ({
            IS_PROD: false,
            IS_JEST: false,
            IS_DEV: true
        }));
        var determineEnvironment = require('./');
        expect(determineEnvironment()).toEqual('DEV');
    });
    it('should return JEST on jest env', function(){
        jest.mock('../../../deps/value', () => ({
            IS_PROD: false,
            IS_JEST: true,
            IS_DEV: false
        }));
        var determineEnvironment = require('./');
        expect(determineEnvironment()).toEqual('TEST');
    });
});