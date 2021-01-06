import {resizeContentWrapper, appendTo, removeClass} from '../utilities/_functions';
import {logState} from '../utilities/_data';
import { router } from '../utilities/_router';
import { removeLoading } from '../components/_loading';


// Main content
const createMain = (parent) => {
    // .app__content
    const main$$ = document.createElement('section');
    main$$.classList.add('app__content');
    resizeContentWrapper(main$$);
    appendTo(parent, main$$);
    // console.log(main$$);
    // parent.addEventListener('', listener);
    

    // Logo click handle
    // const logo$$ = document.querySelector('[data-function="fn-home"]');
    // const burger$$ = document.querySelector('[data-function="fn-toggleMenu"]');
    // logo$$.addEventListener('click', () => {
    //     removeClass(burger$$, 'is-expanded');
    //     // logState.state == false ? home(main$$) : loggedView(main$$);;
    // })

    // const jejeje = document.querySelector('.app__content');
    // console.log(jejeje);

    // let config = {
    //     childList: true
    // };

    // const callbackJEJEJE = (mutationList, observer) => {
    //     const targetEl = document.querySelector('.content__container');
    //     let isLoaded = false;
    //     if (targetEl) {
    //         console.log('element created')
    //         removeLoading(isLoaded);
    //     }
    // }

    // let observer = new MutationObserver(callbackJEJEJE);

    // observer.observe(jejeje, config);



}




export {createMain};