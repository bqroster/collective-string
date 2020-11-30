/**
 * @param {string} value
 * @return {string}
 */
export const kebab = (value) => {
    return snake(value, '-');
};

/**
 * @param {string }value
 * @param {string} delimiter
 * @return {string}
 */
export const snake = (value, delimiter = '_') => {
    return value
            .trim()
            .replace(/(?<!^)(\s?([A-Z])|\s([a-z0-9]))/g, function(match) {
                return delimiter + match.trim();
            })
            .toLowerCase();
};

/**
 * @param {string} value
 * @return {string}
 */
export const camel = (value) => {
    return studly(value)
        .replace(/^./, function(match) {
            return match.toLowerCase();
        });
};

/**
 * @param {string} value
 * @return {string}
 */
export const studly = (value) => {
    return value
        .replace(/([\s\_\-]+([A-Za-z0-9]))/g, function(match) {
            return match.slice(-1).toUpperCase();
        })
        .replace(/[\s\_\-]+/g, '')
        .replace(/^./, function(match) {
            return match.toUpperCase();
        });
};

export default {
    kebab,
    snake,
    camel,
    studly
};