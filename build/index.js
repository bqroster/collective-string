"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.studly=exports.camel=exports.snake=exports.kebab=void 0;var kebab=function(e){return snake(e,"-")};exports.kebab=kebab;var snake=function(e,t){var r=1<arguments.length&&void 0!==t?t:"_";return e.trim().replace(/(?<!^)(\s?([A-Z])|\s([a-z0-9]))/g,function(e){return r+e.trim()}).toLowerCase()};exports.snake=snake;var camel=function(e){return studly(e).replace(/^./,function(e){return e.toLowerCase()})};exports.camel=camel;var studly=function(e){return e.replace(/([\s\_\-]+([A-Za-z0-9]))/g,function(e){return e.slice(-1).toUpperCase()}).replace(/[\s\_\-]+/g,"").replace(/^./,function(e){return e.toUpperCase()})};exports.studly=studly;var _default={kebab:kebab,snake:snake,camel:camel,studly:studly};exports.default=_default;