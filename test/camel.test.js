var Str = require('../src/index').default;

describe('Camel Function', () => {
    test('camel test regular name', function () {
        expect(Str.camel('get-toggle-method')).toBe('getToggleMethod');
        expect(Str.camel(' get-toggle-method ')).toBe('getToggleMethod');
        expect(Str.camel(' -get-toggle-method- ')).toBe('getToggleMethod');
        expect(Str.camel(' -_get-toggle-method_- ')).toBe('getToggleMethod');

        expect(Str.camel('get-toggle_method --__')).toBe('getToggleMethod');
        expect(Str.camel('-_get-_-toggle_-_Method')).toBe('getToggleMethod');
        expect(Str.camel('-_get -_- toggle_ - _Method')).toBe('getToggleMethod');
    });

    test('camel test with uppercase', function () {
        expect(Str.camel('get-toGgle-method')).toBe('getToGgleMethod');
        expect(Str.camel('GETSTR')).toBe('gETSTR');
        expect(Str.camel('-GETSTR_')).toBe('gETSTR');
    });

    test('camel test with lowercase', function () {
        expect(Str.camel('gettogglemethod')).toBe('gettogglemethod');
        expect(Str.camel('-_ gettogglemethod_- ')).toBe('gettogglemethod');
    });

    test('camel test with numbers', function () {
        expect(Str.camel('3gettogglemethod')).toBe('3gettogglemethod');
        expect(Str.camel('3-get-toggle-method')).toBe('3GetToggleMethod');
        expect(Str.camel('get-3toggle-method')).toBe('get3toggleMethod');
        expect(Str.camel('get-toggle-method3')).toBe('getToggleMethod3');
    });
});