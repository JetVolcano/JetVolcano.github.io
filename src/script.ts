// This module provides utilities to easily manipulate the DOM.

import { log } from "console";


function changeText(element: HTMLElement, text: any) {
    element.innerHTML = text;
}

export default {
    changeText
}