// ==UserScript==
// @name         midnight sizzle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.roblox.com/my/avatar
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    audio.play()
    document.onclick = function() { if (audio.paused) {audio.play()} }
    document.onkeydown = function() { if (audio.paused) {audio.play()} }
    document.onblur = function() {audio.pause()}
    document.onfocus = function() {if (audio.paused) {audio.play()}}
})();