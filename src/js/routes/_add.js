import { mainBtn } from "../components/_mainBtn";
import { logState, urlsToFetch } from "../utilities/_data";
import { appendTo, createForm, fetchData, postToApi, removeChildsIf, sectionTitle } from "../utilities/_functions";
import { router } from "../utilities/_router";



export const addPost = () => {
    const main$$ = document.querySelector('.app__content');
    removeChildsIf(main$$);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(header$$, 'add post');
    createForm(container$$, 'addPost')
    mainBtn(container$$, 'submit', () => {
        postPost();
    }, 'form', 'userForm')
    appendTo(main$$, header$$);
    appendTo(main$$, container$$);
}

const postPost = async () => {
    const form$$ = document.querySelector('#userForm');
    const title$$ = document.querySelector('[data-function="title"]');
    const content$$ = document.querySelector('[data-function="content"]');
    
    let today = new Date().toLocaleDateString('en-US');
    let hour = new Date().toLocaleTimeString('en-US', {
        hour: "numeric",
        minute: "numeric"
    });

    let paragraphs = content$$.value.split(/\r\n|\r|\n/gi);
    let formatedParagraphs = [];
    for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        if (p != '') {
            formatedParagraphs.push(`<p>${p}</p>`);
        }
    }
    let finalContent = formatedParagraphs.join('');
    
    const newPost = {
        "id": 0,
        "author": logState.user_id,
        "img": "",
        "tags": [],
        "title": `${title$$.value}`,
        "content": `${finalContent}`,
        "created_date": `${today}`,
        "created_time": `${hour}`
    }
    if (form$$.checkValidity()) {
        alert('Post submitted');
        postToApi(newPost, urlsToFetch.posts);
        router.load('home');
    } else {}
}

