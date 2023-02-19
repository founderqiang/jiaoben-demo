// ==UserScript==
// @name         hello world
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @license      AGPL License
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
    let a = document.querySelector('.item-thumb');
    a.style.backgroundImage='url(/usr/customize/logo.png)';
    a.addEventListener('click',() => {
        a.style.background='#f0f';
    });
    // Your code here...
})();