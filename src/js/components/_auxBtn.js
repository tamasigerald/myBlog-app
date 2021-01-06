import {
    appendTo
} from '../utilities/_functions'

// The aux button
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
    
    // stickyBackBtn(btn$$);
    // window.addEventListener('scroll', () => {
    //     stickyBackBtn(btn$$);
    // });
}


// const stickyBackBtn = (btn) => {
//     let y = window.scrollY;
//     let h = window.innerHeight;
//     let defaultValue = 2;
//     let newValue = defaultValue + ((h/10) - 8);
//     if (y == 0 || y < 100) {
//         btn.style.setProperty(`bottom`, `${defaultValue}rem`)
//     } 
//     else if (y > 100) {
//         btn.style.setProperty(`bottom`, `${newValue}rem`)
//     }
// }
// const stickyBackBtn = (btn) => {
//     let y = window.scrollY;
//     if (y < 100) {
//         btn.classList.remove('scroll--show')
//     } else if (y > 100) {
//         btn.classList.add('scroll--show')

//     }
// }
