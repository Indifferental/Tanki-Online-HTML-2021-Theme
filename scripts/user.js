// ==UserScript==
// @name         HTML 2021 Theme
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       https://vk.com/legionlegionlegionlegionlegion
// @match        https://*.tankionline.com/*
// @icon         https://raw.githubusercontent.com/Indifferental/Tanki-Online-HTML-2021-Theme/main/assets/logosmall.webp
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/Indifferental/Tanki-Online-HTML-2021-Theme/main/scripts/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
