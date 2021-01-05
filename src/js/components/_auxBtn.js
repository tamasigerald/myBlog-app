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
    
    stickyBtn(btn$$);
    window.addEventListener('scroll', () => {
        stickyBtn(btn$$);
    });
}


const stickyBtn = (btn) => {
    let y = window.scrollY;
    let defaultTop = 11.8;
    if (y == 0) {
        btn.style.setProperty(`top`, `${defaultTop}rem`)
    } 
    else if (y > 100) {
        btn.style.setProperty(`top`, `${defaultTop-10.5}rem`)
    }
}
