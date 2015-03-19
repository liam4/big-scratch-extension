// ==UserScript==
// @name         Big Scratch Extension Installer / Updater
// @namespace    https://github.com/liam4/
// @version      1.0
// @description  Script to Update and Install BSE
// @author       liam4
// @match        http://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

installBSE = function() {
    console.log("Loading Big Scratch Extension!");
    try {
        $.getScript("https://rawgit.com/liam4/big-scratch-extension/master/BigScratchExtension.js");
    } catch(err) {
        console.error("Error loading BSE:", err);
    }
};

var dialog = document.createElement("div");
dialog.style.position = "fixed";
dialog.style.left    = "25%";
dialog.style.top     = "25%";
dialog.style.width   = "50%";
dialog.style.height  = "50%";
dialog.style.fontFamily = "arial";
dialog.style.zIndex     = "9999";
dialog.style.background = "#FFF";
dialog.style.border     = "3px solid black";
dialog.innerHTML = "<center><h3>Install Big Scratch Extension</h3>" +
    "<p>To install BSE, please push this button <b>after the project has loaded</b>.</p>" +
    "<button onclick='installBSE();'>Install</button>" +
    "<button onclick='this.parentElement.parentElement.style.display = \"none\"'>Close</button>";
document.getElementsByTagName("body")[0].appendChild(dialog);