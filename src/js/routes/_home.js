import {appendTo, removeChildsIf, sectionTitle, fetchData, sortDates} from '../utilities/_functions';
import {logState, urlsToFetch} from '../utilities/_data';
import {mainBtn} from '../components/_mainBtn';
import {search} from '../components/_search';
import {postCards} from '../components/_postCard';
import { router } from '../utilities/_router';
import { loadingScreen, removeLoading } from '../components/_loading';



export const homePage = async (parent) => {
    let isLoaded = false;
    loadingScreen(parent);
    let posts = await fetchData(urlsToFetch.posts);
    removeLoading(isLoaded);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    let title;
    logState.state === false ? title = `Hi, <span>guest</span>` : title = `Hi, <span>${logState.user_name}</span>`;
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(header$$, title);
    appendTo(parent, header$$);
    appendTo(parent, container$$);
    postTags(container$$, posts);
    search(header$$, posts);
    mainBtn(container$$, 'recent posts', () => {
        router.load('recents', posts);
    })
}

const postTags = (parent, posts) => {
    let tags = getTags(posts);
    showTags(parent, tags, posts);
}

// Gets all tags in api
const getTags = (posts) => {
    let tags = [];
    for (let post in posts) {
        post = posts[post];
        for (let key in post) {
            if (key === 'tags') {
                key = post[key]
                for (let tag in key) {
                    tag = key[tag];
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                }
            }
        }
    }
    return tags;
}

// Shown tags
const showTags = (parent, tags, posts) => {
    // select 6 tags to show + order a to z
    let numOfTags = 6;
    let shownResults = tags.slice(0, numOfTags)
    shownResults.sort((a, b) => a.localeCompare(b));
    // print results
    const h3$$ = document.createElement('h3');
    h3$$.classList.add('app__subtitle');
    h3$$.innerHTML = 'here are some trending topics';
    const tagContainer$$ = document.createElement('div');
    tagContainer$$.classList.add('tag__container');
    shownResults.forEach(element => {
        const tag$$ = document.createElement('p');
        tag$$.classList.add('tag__element');
        tag$$.innerHTML = `${element}`;
        appendTo(tagContainer$$, tag$$);
        tag$$.addEventListener('click', () => {
            let postWithTag = getPostByTag(element, posts);
            const main$$ = document.querySelector('.app__content');
            // tagPosts(main$$, postWithTag, element);
            let props = [postWithTag, element];
            router.load('tagPosts', props)
        });
    });
    appendTo(parent, h3$$);
    appendTo(parent, tagContainer$$);
}

// Gets post by tag
const getPostByTag = (tag, posts) => {
    let postByTag = [];
    for (let post in posts) {
        post = posts[post];
        for (let key in post) {
            if (key === 'tags') {
                key = post[key]
                if (key != null) {
                    if (key.includes(tag)) {
                        postByTag.push(post);
                    };
                }
            }
        }
    }
    return postByTag;
}