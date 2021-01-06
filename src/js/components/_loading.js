import { appendTo, removeChildsIf, removeElement, resizeContentWrapper } from "../utilities/_functions";


export const loadingScreen = (parent) => {
    const app$$ = document.querySelector('#app');
    removeChildsIf(parent);
    const container$$ = document.createElement('div');
    container$$.classList.add('loading');
    for (let index = 0; index < 5; index++) {
        const dot$$ = document.createElement('div');
        dot$$.classList.add('dot');
        appendTo(container$$, dot$$);
    }
    resizeContentWrapper(container$$);
    appendTo(app$$, container$$)
}


export const removeLoading = () => {
    const loading$$ = document.querySelector('.loading');
    let isLoaded = true;
    if (isLoaded) {
        removeElement(loading$$);
    }
}