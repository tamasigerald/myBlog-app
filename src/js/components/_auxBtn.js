import {
    appendTo
} from '../utilities/_functions'

// The main button
export const auxBtn = (parent, text, callback, props, propsArg) => {
    const btn$$ = document.createElement('button');
    btn$$.classList.add('aux__btn');
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
    
    stickyBackBtn(btn$$);
    window.addEventListener('scroll', () => {
        stickyBackBtn(btn$$);
    });
}


const stickyBackBtn = (btn) => {
    let y = window.scrollY;
    let defaultTop = 11.8;
    if (y == 0 || y < 100) {
        btn.style.setProperty(`top`, `${defaultTop}rem`)
    } 
    else if (y > 100) {
        btn.style.setProperty(`top`, `${defaultTop-10}rem`)
    }
}
