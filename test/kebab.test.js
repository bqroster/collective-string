var Str = require('../src/index').default;

describe('Kebab Function', () => {
    test('kebab test regular name', function () {
        expect(Str.kebab('getToggleMethod')).toBe('get-toggle-method');
        expect(Str.kebab('    getToggleMethod     ')).toBe('get-toggle-method');
        expect(Str.kebab('    -getToggleMethod     ')).toBe('-get-toggle-method');
    });

    test('kebab test uppercase first letter', function () {
        expect(Str.kebab('StringValueRetriever')).toBe('string-value-retriever');
    });

    test('kebab test all letters uppercase', function () {
        expect(Str.kebab('STRTOP')).toBe('s-t-r-t-o-p');
    });

    test('kebab test all letters lowercase', function () {
        expect(Str.kebab('retriever')).toBe('retriever');
    });

    test('kebab test with blank space \s before an Uppercase Letter', function () {
        expect(Str.kebab('retrieverMethod Last')).toBe('retriever-method-last');
    });

    test('kebab test with blank space \s before a lowercase Letter', function () {
        expect(Str.kebab('retr ieverMet hodLast')).toBe('retr-iever-met-hod-last');
    });

    test('kebab test with blank space \s before a lower and uppercase Letter', function () {
        expect(Str.kebab('retr ieve r M et hod Last')).toBe('retr-ieve-r-m-et-hod-last');
    });

    test('kebab test with Numbers', function () {
        expect(Str.kebab('retrieverMethod3Last')).toBe('retriever-method3-last');
        expect(Str.kebab('retrieverMethod 3 Last')).toBe('retriever-method-3-last');
        expect(Str.kebab('retri3everMethod 3 Last')).toBe('retri3ever-method-3-last');
    });
});