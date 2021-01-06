import { urlsToFetch } from "../utilities/_data";
import { appendTo, fetchData, removeElement } from "../utilities/_functions";
import { router } from "../utilities/_router";




// Each post card for each function --- only shows the 10 most recent posts
export const postCards = async (parent, posts) => {
    let users = await fetchData(urlsToFetch.users);
    let numOfPost = 10;
    let shownResults = posts.slice(0, numOfPost).map(
        post => {
            const card$$ = document.createElement('div');
            card$$.classList.add('card');
            const figure$$ = document.createElement('figure');
            figure$$.classList.add('card__figure');
            const img$$ = document.createElement('img');
            img$$.classList.add('figure__img');
            img$$.setAttribute('loading', 'lazy');
            img$$.src = post.img;
            imgLoading(figure$$);
            img$$.addEventListener('load', () => {
                removeImgLoading();
            })
            const caption$$ = document.createElement('div');
            caption$$.classList.add('card__caption');
            const title$$ = document.createElement('h3');
            title$$.classList.add('caption__title');
            title$$.innerHTML = `${post.title}`;
            const date$$ = document.createElement('p');
            date$$.classList.add('caption__date');
            date$$.innerHTML = `${post.created_date}`;
            const author$$ = document.createElement('p');
            author$$.classList.add('caption__author');
            let author;
            for (const user in users) {
                if (users[user].id === post.author) {
                    author = `${users[user].user_name}`;
                    author$$.innerHTML = author;
                }
            }
            let props = [post, author];
            title$$.addEventListener('click', () => {
                router.load('post', props);
                window.scrollTo(0, 0);
            })
            appendTo(figure$$, img$$);
            appendTo(caption$$, title$$);
            appendTo(caption$$, date$$);
            appendTo(caption$$, author$$);
            appendTo(card$$, figure$$);
            appendTo(card$$, caption$$);
            appendTo(parent, card$$);
        }
    )
}


const imgLoading = (image) => {
    const container$$ = document.createElement('div');
    container$$.classList.add('loading__img');
    for (let index = 0; index < 5; index++) {
        const dot$$ = document.createElement('div');
        dot$$.classList.add('dot');
        appendTo(container$$, dot$$);
    }
    appendTo(image, container$$)
}

export const removeImgLoading = () => {
    const loading$$ = document.querySelector('.loading__img');
    let isLoaded = true;
    if (isLoaded) {
        removeElement(loading$$);
    }
}

