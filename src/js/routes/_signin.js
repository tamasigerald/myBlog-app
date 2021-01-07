import { removeLoading } from "../components/_loading";
import { mainBtn } from "../components/_mainBtn";
import { logState, urlsToFetch } from "../utilities/_data";
import { appendTo, createForm, defaultInput, inputIsGood, removeChildsIf, fetchData, sectionTitle, inputIsWrong } from "../utilities/_functions";
import { router } from "../utilities/_router";




export const signInForm = async () => {
    const main$$ = document.querySelector('.app__content');
    removeChildsIf(main$$);
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(container$$, 'sign In', 'form__title');
    createForm(container$$, 'signIn');
    appendTo(main$$, container$$);
    let isLoaded = false;
    let users = await fetchData(urlsToFetch.users);
    removeLoading(isLoaded);
    mainBtn(main$$, `sign In`, () => {
        const form = document.querySelector('#userForm');
        form.reportValidity();
        fnSignIn(users);
    }, 'form', 'userForm')
}

const fnSignIn = (users) => {
    const inputs$$ = document.querySelectorAll('.form__input');
    const usrInput$$ = inputs$$[0];
    const pswInput$$ = inputs$$[1];
    pswInput$$.addEventListener('input', () => {
        defaultInput(pswInput$$);
    })
    for (let user in users) {
        user = users[user];
        if (user.user_name == usrInput$$.value && user.password == pswInput$$.value) {
            logState.state = true;
            logState.user_name = user.user_name;
            logState.user_id = user.id;
            inputIsGood(usrInput$$);
            inputIsGood(pswInput$$);
            pswInput$$.setCustomValidity('');
            const thisTimeout = setTimeout(() => {
                router.load('home');
            }, 1200);
            return
        } else if (user.user_name == usrInput$$.value && user.password != pswInput$$.value) {
            // inputIsWrong(pswInput$$);
            inputIsWrong(pswInput$$);
            pswInput$$.setCustomValidity('Incorrect password!');
        } else if (user.user_name != usrInput$$.value) {
            inputIsWrong(usrInput$$);
            usrInput$$.addEventListener('input', () => {
                defaultInput(usrInput$$);
            })
        }
    }

}