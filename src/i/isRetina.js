/* Determine if running on a high DPR device or not.
 */

/* example
 * console.log(isRetina); // -> true if high DPR
 */

/* module
 * env: browser
 */

/* typescript
 * export declare const isRetina: boolean;
 */

_('isBrowser');

const mediaQuery =
    '(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)';

exports =
    isBrowser &&
    (window.devicePixelRatio > 1.25 ||
        (window.matchMedia && window.matchMedia(mediaQuery).matches));
