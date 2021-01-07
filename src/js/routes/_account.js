import { auxBtn } from "../components/_auxBtn";
import { loadingScreen, removeLoading } from "../components/_loading";
import { logState, urlsToFetch } from "../utilities/_data";
import { appendTo, fetchData, removeChildsIf, sectionTitle } from "../utilities/_functions";
import { router } from "../utilities/_router";



export const myAccount = async (parent) => {
    loadingScreen();
    let isLoaded = false;
    let user = await fetchData(`${urlsToFetch.users}/${logState.user_id}`);
    removeChildsIf(parent);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(header$$, `${user.user_name}`);
    appendTo(parent, header$$);
    appendTo(parent, container$$);
    printData(container$$, user);
    auxBtn(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        router.load('home');
    })
    removeLoading();
}


const printData = (parent, user) => {
    const wrapper$$ = document.createElement('ul');
    wrapper$$.classList.add('acc__wrapper')
    for (const key in user) {
        if (key != 'password' && key != 'user_name' && user[key] != '') {
            const li$$ = document.createElement('li');
            li$$.classList.add('acc__element');
            li$$.innerHTML = `${key}: ${user[key]}`;
            appendTo(wrapper$$, li$$)
        }
    }
    appendTo(parent, wrapper$$);
}

