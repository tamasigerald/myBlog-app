import {appendTo} from '../utilities/_functions'

// The scroll button
export const scrollBtn = (parent, text, callback, props, propsArg) => {
    const btn$$ = document.createElement('button');
    btn$$.classList.add('scroll__btn');
    btn$$.setAttribute('type', 'button');
    btn$$.innerHTML = `${text}`;
    if (props) {
        btn$$.setAttribute(`${props}`, `${propsArg}`);
    }
    btn$$.addEventListener('click', () => {
        callback();
    })
    // btnPositionWrapper(btn$$);
    appendTo(parent, btn$$);
    // scrollBtnShow(btn$$);
    window.addEventListener('scroll', () => {
        scrollBtnShow(btn$$);
    })
}



const scrollBtnShow = (btn) => {
    // btn.classList.add('scroll--show')
    let y = window.scrollY;
    if (y < 100) {
        btn.classList.remove('scroll--show')
    } else if (y > 100) {
        btn.classList.add('scroll--show')
        
    }
}