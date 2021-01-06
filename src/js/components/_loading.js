import { appendTo, removeChildsIf, removeElement, resizeContentWrapper } from "../utilities/_functions";


export const loadingScreen = (parent) => {
    const app$$ = document.querySelector('#app');
    if (parent){
        removeChildsIf(parent);
    }
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


export const removeLoading = (isLoaded) => {
    isLoaded = true;
    if (isLoaded == true) {
        const loading$$ = document.querySelector('.loading');
        if (loading$$) {
            removeElement(loading$$);
        }
    }
}

// export const removeLoadingWrapper = (element) => {
//     const jejeje = document.querySelector('.app__content');

//     let config = {
//         childList: true,
//         subtree: true
//     };

//     const callbackJEJEJE = (mutationList, observer) => {
//         // const targetEl = document.querySelector('.content__container');
//         let isLoaded = false;
//         if (jejeje) {
//             removeLoading(isLoaded);
//         }
//     }

//     let observer = new MutationObserver(callbackJEJEJE);

//     observer.observe(jejeje, config);
// }