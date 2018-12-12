/* Cast value into a property path array.
 *
 * |Name  |Type        |Desc               |
 * |------|------------|-------------------|
 * |path  |string array|Value to inspect   |
 * |[obj] |object      |Object to query    |
 * |return|array       |Property path array|
 */

/* example
 * castPath('a.b.c'); // -> ['a', 'b', 'c']
 * castPath(['a']); // -> ['a']
 * castPath('a[0].b'); // -> ['a', '0', 'b']
 * castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function castPath(path: string | string[], obj?: any): string[];
 */

_('has isArr');

exports = function(str, obj) {
    if (isArr(str)) return str;
    if (obj && has(obj, str)) return [str];

    var ret = [];

    str.replace(regPropName, function(match, number, quote, str) {
        ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
    });

    return ret;
};

// Lodash _stringToPath
var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    regEscapeChar = /\\(\\)?/g;