var Str = require('../src/index').default;

describe('Studly Function', () => {
    test('studly test regular name', function () {
        expect(Str.studly('get-toggle-method')).toBe('GetToggleMethod');
        expect(Str.studly(' get-toggle-method ')).toBe('GetToggleMethod');
        expect(Str.studly(' -get-toggle-method- ')).toBe('GetToggleMethod');
        expect(Str.studly(' -_get-toggle-method_- ')).toBe('GetToggleMethod');

        expect(Str.studly('get-toggle_method --__')).toBe('GetToggleMethod');
        expect(Str.studly('-_get-_-toggle_-_Method')).toBe('GetToggleMethod');
        expect(Str.studly('-_get -_- toggle_ - _Method')).toBe('GetToggleMethod');
    });

    test('studly test with uppercase', function () {
        expect(Str.studly('get-toGgle-method')).toBe('GetToGgleMethod');
        expect(Str.studly('GETSTR')).toBe('GETSTR');
        expect(Str.studly('-GETSTR_')).toBe('GETSTR');
    });

    test('studly test with lowercase', function () {
        expect(Str.studly('gettogglemethod')).toBe('Gettogglemethod');
        expect(Str.studly('-_ gettogglemethod_- ')).toBe('Gettogglemethod');
    });

    test('studly test with numbers', function () {
        expect(Str.studly('3gettogglemethod')).toBe('3gettogglemethod');
        expect(Str.studly('3-get-toggle-method')).toBe('3GetToggleMethod');
        expect(Str.studly('get-3toggle-method')).toBe('Get3toggleMethod');
        expect(Str.studly('get-toggle-method3')).toBe('GetToggleMethod3');
    });
});