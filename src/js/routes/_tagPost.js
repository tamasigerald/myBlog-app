import { auxBtn } from "../components/_auxBtn";
import { mainBtn } from "../components/_mainBtn";
import { postCards } from "../components/_postCard";
import { search } from "../components/_search";
import { urlsToFetch } from "../utilities/_data";
import { appendTo, fetchData, removeChildsIf, sectionTitle, sortDates } from "../utilities/_functions";
import { router } from "../utilities/_router";




// Post with tag page
export const tagPosts = async (parent, props) => {
    removeChildsIf(parent);
    sortDates(props[0]);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    let title = `${props[1]} posts`;
    sectionTitle(header$$, title, 'header__title');
    appendTo(parent, header$$);
    appendTo(parent, container$$);
    postCards(container$$, props[0])
    auxBtn(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        router.load('home');
    })
    let mainPost = await fetchData(urlsToFetch.posts);
    search(header$$, mainPost);
}

