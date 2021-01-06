import {appendTo, toggleClass, removeAllChildNodes, resizeContentWrapper, removeClass} from '../utilities/_functions';
import {logState, links} from '../utilities/_data';
import { router } from '../utilities/_router';
import { loadingScreen } from './_loading';


// NavBar
export const navBar = (parent) => {
    const nav$$ = document.createElement('header__nav');
    nav$$.classList.add('header__nav')
    const logo$$ = document.createElement('a');
    logo$$.classList.add('nav__logo');
    logo$$.setAttribute('href', 'javascript:void(0)');
    logo$$.setAttribute('data-function', 'fn-home');
    logo$$.innerText = 'myBlog';
    const burger$$ = document.createElement('div');
    burger$$.classList.add('nav__burger');
    burger$$.setAttribute('data-function', 'fn-toggleMenu');
    for (let index = 0; index < 3; index++) {
        const span$$ = document.createElement('span');
        span$$.classList.add('nav__burger__line');
        burger$$.appendChild(span$$);
    }
    burger$$.addEventListener('click', () => {
        toggleClass(burger$$, 'is-expanded');
    })
    logo$$.addEventListener('click', () => {
        logState.state === false ? router.load('landing') : router.load('home');
        removeClass(burger$$, 'is-expanded')
    })
    appendTo(nav$$, logo$$);
    appendTo(nav$$, burger$$);
    appendTo(parent, nav$$);
    navLinks(nav$$, burger$$);
}

// Creates menu for burger
const navLinks = (parent, burger) => {
    const menu$$ = document.createElement('div');
    menu$$.classList.add('nav__menu');
    menu$$.setAttribute('tabindex', '-1')
    resizeContentWrapper(menu$$);
    const mUl$$ = document.createElement('ul');
    logState.state === false ? getNavLinks(mUl$$, burger, links.not_logged) : getNavLinks(mUl$$, burger, links.logged);
    const app$$ = document.querySelector('#app');
    app$$.addEventListener('click', () => {
        if (mUl$$) {
            removeAllChildNodes(mUl$$);
        }
        logState.state === false ? getNavLinks(mUl$$, burger, links.not_logged) : getNavLinks(mUl$$, burger, links.logged);
    })
    
    appendTo(menu$$, mUl$$);
    appendTo(parent, menu$$);
}

// Creates links from array for menu -> burger
const getNavLinks = (parent, burger, links) => {
    for (const key in links) {
        const mLi$$ = document.createElement('li');
        const a$$ = document.createElement('a');
        a$$.setAttribute('href', 'javascript:void(0)');
        a$$.innerText = `${links[key].name}`;
        appendTo(mLi$$, a$$);
        appendTo(parent, mLi$$);
        a$$.addEventListener('click', () => {
            toggleClass(burger, 'is-expanded');
            links[key].fn.call();
        })
    }
}