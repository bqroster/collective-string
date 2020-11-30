var Str = require('../src/index').default;

describe('Snake Function', () => {
    test('snake test regular name', function () {
        expect(Str.snake('getToggleMethod')).toBe('get_toggle_method');
        expect(Str.snake('    getToggleMethod     ')).toBe('get_toggle_method');
        expect(Str.snake('    -getToggleMethod     ')).toBe('-get_toggle_method');
    });

    test('snake test uppercase first letter', function () {
        expect(Str.snake('StringValueRetriever')).toBe('string_value_retriever');
    });

    test('snake test all letters uppercase', function () {
        expect(Str.snake('STRTOP')).toBe('s_t_r_t_o_p');
    });

    test('snake test change delimiter', function () {
        expect(Str.snake('isValidMethod', '#')).toBe('is#valid#method');
    });

    test('snake test change delimiter two', function () {
        expect(Str.snake('isValidMethod', '')).toBe('isvalidmethod');
    });

    test('snake test all letters lowercase', function () {
        expect(Str.snake('retriever')).toBe('retriever');
    });

    test('snake test with blank space \s before an Uppercase Letter', function () {
        expect(Str.snake('retrieverMethod Last')).toBe('retriever_method_last');
    });

    test('snake test with blank space \s before a lowercase Letter', function () {
        expect(Str.snake('retr ieverMet hodLast')).toBe('retr_iever_met_hod_last');
    });

    test('snake test with blank space \s before a lower and uppercase Letter', function () {
        expect(Str.snake('retr ieve r M et hod Last')).toBe('retr_ieve_r_m_et_hod_last');
    });

    test('snake test with Numbers', function () {
        expect(Str.snake('retrieverMethod3Last')).toBe('retriever_method3_last');
        expect(Str.snake('retrieverMethod 3 Last')).toBe('retriever_method_3_last');
        expect(Str.snake('retri3everMethod 3 Last')).toBe('retri3ever_method_3_last');
    });
});