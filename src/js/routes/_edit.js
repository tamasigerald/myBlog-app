import { auxBtn } from "../components/_auxBtn";
import { mainBtn } from "../components/_mainBtn";
import { urlsToFetch } from "../utilities/_data";
import { appendTo, createForm, removeChildsIf, sectionTitle } from "../utilities/_functions";
import { router } from "../utilities/_router";
import { postPage } from "./_post";




export const editPost = (parent, props) => {
    const main$$ = document.querySelector('.app__content');
    removeChildsIf(main$$);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(header$$, 'edit post');
    createForm(container$$, 'addPost')
    mainBtn(container$$, 'edit', () => {
        postEdit(props[0], main$$, props)
    }, 'form', 'userForm')
    auxBtn(container$$, `<i class='bx bx-eraser'></i>`, () => {
        fetchDelete(urlsToFetch.posts, props[0].id);
    });
    appendTo(main$$, header$$);
    appendTo(main$$, container$$);
    fillPostData(props[0]);
}


const fillPostData = (post) => {
    const title$$ = document.querySelector('[data-function="title"]');
    const content$$ = document.querySelector('[data-function="content"]');
    let separateText = post.content.split('</p>');
    let deleteText = separateText.filter(el => el != '').map(el => {return el.substring(3)});
    let convertText = deleteText.map(el => {return el + '\n\n'});
    let value = convertText.join('');
    title$$.value = post.title;
    content$$.value = value;
}

const postEdit = async (post, parent, props) => {
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
    console.log(post);
    const newPost = {
        "id": post.id,
        "author": post.author,
        "img": post.img,
        "tags": post.tags,
        "title": `${title$$.value}`,
        "content": `${finalContent}`,
        "created_date": `${today}`,
        "created_time": `${hour}`
    }
    console.log(newPost);
    if (form$$.checkValidity()) {
        alert('Post submitted');
        fetchEdit(newPost, urlsToFetch.posts, post.id);
        router.load('recents');
    } else {}
    
}

const fetchEdit = (element, url, id) => {
    fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

const fetchDelete = (url, id) => {
    // console.log(`${url}/${id}`)
    const confirmation = () => {return window.confirm('Are you sure do you want to delete this post?')};
    let result = confirmation();
    if (result == true) {
        window.alert('Post deleted!')
        fetch(`${url}/${id}`, {
                    method: "DELETE",
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))
            router.load('home');
    } else {}
}