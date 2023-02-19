// ==UserScript==
// @name         第一个油猴脚本
// @namespace    http://blog.chrxw.com/
// @version      0.1
// @description  hello world
// @author       Chr_
// @match        https://blog.chrxw.com/about.html
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