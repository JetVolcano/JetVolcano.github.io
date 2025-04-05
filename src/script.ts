// This module provides utilities to easily manipulate the DOM.


function changeText(element: HTMLElement, text: any) {
    element.innerHTML = text;
}

export{
    changeText
}