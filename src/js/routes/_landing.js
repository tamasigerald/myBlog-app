import {appendTo, removeChildsIf} from '../utilities/_functions';
import {mainBtn} from '../components/_mainBtn';
import {router} from '../utilities/_router';




export const landingPage = (parent) => {
    removeChildsIf(parent);
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    const h1$$ = document.createElement('h1');
    h1$$.classList.add('home__title');
    h1$$.innerHTML = 'Welcome to <span>myBlog</span>';
    const h3$$ = document.createElement('h3');
    h3$$.classList.add('app__subtitle');
    h3$$.innerText = 'made for real bloggers';
    appendTo(container$$, h1$$);
    appendTo(container$$, h3$$);
    appendTo(parent, container$$);
    mainBtn(container$$, 'start!', () => {
        router.load('home');
    })
}