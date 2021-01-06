import { auxBtn } from "../components/_auxBtn";
import { removeLoading } from "../components/_loading";
import { mainBtn } from "../components/_mainBtn";
import { postCards } from "../components/_postCard";
import { scrollBtn } from "../components/_scrollBtn";
import { search } from "../components/_search";
import { urlsToFetch } from "../utilities/_data";
import {
    appendTo,
    sectionTitle,
    removeChildsIf,
    fetchData,
    scrollToTop,
    sortDates
} from "../utilities/_functions";
import { router } from "../utilities/_router";




// Recent posts page
export const recentPosts = async (parent, posts) => {
    if (!posts) {
        let isLoaded = false;
        loadingScreen(parent);
        posts = await fetchData(urlsToFetch.posts);
        removeLoading(isLoaded);
    }
    sortDates(posts);
    removeChildsIf(parent);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(header$$, 'recent posts', 'header__title');
    appendTo(parent, header$$);
    appendTo(parent, container$$);
    postCards(container$$, posts)
    search(header$$, posts);
    scrollBtn(parent, `<i class='bx bx-arrow-to-top'></i>`, () => {
        scrollToTop();
    });
    auxBtn(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        router.load('home');
    })
}
