import * as fn from '../utilities/_functions';
import {navBar} from '../components/_navBar'


const createHeader = (parent) => {
    // .app__header
    const header$$ = document.createElement('header');
    header$$.classList.add('app__header');
    fn.appendTo(parent, header$$);
    navBar(header$$);
}


export {createHeader}