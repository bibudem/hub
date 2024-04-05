"use strict";

class MarkCodeLineManager {
    constructor() {
        this.className = "hll";
    }

}

const gBIB_LOCAL = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
const gBIB_DEV = window.location.hostname.toLowerCase() !== "bibudem.github.io" && !gBIB_LOCAL;


window.addEventListener("DOMContentLoaded", _ => {
    bibExternalLinks();
});

function bibAddClassToElement(className, element, elementName) {
    if (element.classList.contains(className)) {
        return;
    }

    element.classList.add(className);
}

function bibExternalLinks() {
    const hostname = window.location.hostname;
    const domainParts = hostname.split('.');
    const githubId = domainParts[1] === "github" ? domainParts[0] : "bibudem";
    const repoUrl = `github.com/${githubId}`;
    const regex = new RegExp(`^(?:https?:\/\/)?(${hostname}|${repoUrl})`, "i");
    const anchors = document.querySelectorAll(".md-content a");
    const className = "external-link";

    anchors.forEach( a => {
        if (a.href === "" || regex.test(a.href)) {
            return;
        }
        a.setAttribute("target", "_blank");

        bibAddClassToElement(className, a, a.href);
    });
}