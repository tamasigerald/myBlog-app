import {appendTo} from '../utilities/_functions'

// The main button
export const mainBtn = (parent, text, callback, props, propsArg) => {
    const btn$$ = document.createElement('button');
    btn$$.classList.add('content__btn');
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
}