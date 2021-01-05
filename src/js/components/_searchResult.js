import { appendTo, removeElement, scrollToTop, sortDates } from "../utilities/_functions";
import { router } from "../utilities/_router";
import { auxBtn } from "./_auxBtn";
import { mainBtn } from "./_mainBtn";
import { postCards } from "./_postCard";



// Search result page
export const searchResults = (parent, posts) => {
    const containerToRemove$$ = document.querySelector('.content__container');
    const btnToRemove$$ = document.querySelector('button');
    if (containerToRemove$$) {
        removeElement(containerToRemove$$);
    }
    if (btnToRemove$$) {
        removeElement(btnToRemove$$);
    }
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sortDates(posts);
    appendTo(parent, container$$);
    postCards(container$$, posts)
    mainBtn(parent, `<i class='bx bx-arrow-to-top'></i>`, () => {
        scrollToTop();
    });
    auxBtn(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        router.load('home');
    })
}