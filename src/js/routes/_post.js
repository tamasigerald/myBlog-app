
import { auxBtn } from "../components/_auxBtn";
import { mainBtn } from "../components/_mainBtn";
import { scrollBtn } from "../components/_scrollBtn";
import { inputElements, logState, urlsToFetch } from "../utilities/_data";
import { appendTo, createForm, createInput, fetchData, removeChildsIf, scrollToTop, sectionTitle, sortDates } from "../utilities/_functions"
import { router } from "../utilities/_router";


export const postPage = async (parent, props) => {
    let post = await fetchData(`${urlsToFetch.posts}/${props[0].id}`);
    removeChildsIf(parent);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');

    const figure$$ = document.createElement('figure');
    figure$$.classList.add('figure')
    const img$$ = document.createElement('img');
    img$$.classList.add('figure__image');
    img$$.src = `${post.img}`;
    const postContent$$ = document.createElement('div');
    postContent$$.classList.add('post__content')
    postContent$$.innerHTML = `${props[0].content}`;
    const postInfo$$ = document.createElement('div');
    postInfo$$.classList.add('post__info');
    postInfo$$.innerHTML = `
    <p>${post.created_date} - ${post.created_time}</p>
    <p>${props[1]}</p>`;
    const postCommentsContainer$$ = document.createElement('div');
    postCommentsContainer$$.classList.add('post__comments');
    
    
    sectionTitle(header$$, `${post.title}`, 'header__title');
    appendTo(figure$$, img$$);
    appendTo(container$$, figure$$);
    appendTo(container$$, postContent$$);
    appendTo(container$$, postInfo$$);
    appendTo(container$$, postCommentsContainer$$);
    appendTo(parent, header$$);
    appendTo(parent, container$$);
    let postComments = await getComments(props[0].id);
    commentCard(postCommentsContainer$$, postComments);
    
    if (logState.state === true) {
        createForm(postCommentsContainer$$, 'postComment');
        mainBtn(container$$, 'submit', () =>{
            console.log('hey')
        }, 'form', 'userForm')
    } else {
        postCommentsContainer$$.style.setProperty('padding-bottom', '0');
    }
    scrollBtn(parent, `<i class='bx bx-arrow-to-top'></i>`, () => {
        scrollToTop();
    });
    auxBtn(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        router.load('recents');
    })
    
}


const commentCard = async (parent, comments) => {
    for (let comment in comments) {
        const comentCard$$ = document.createElement('div');
        comentCard$$.classList.add('comment__card');
        comment = comments[comment];
        const commentContent$$ = document.createElement('p');
        commentContent$$.classList.add('comment__content');
        const commentAuthor$$ = document.createElement('p');
        commentAuthor$$.classList.add('comment__author');
        const commentDate$$ = document.createElement('p');
        commentDate$$.classList.add('comment__date');


        commentContent$$.innerText = comment.content;
        commentAuthor$$.innerText = await getUser(comment.user);
        commentDate$$.innerText = comment.created_date;

        appendTo(comentCard$$, commentContent$$)
        appendTo(comentCard$$, commentAuthor$$)
        appendTo(comentCard$$, commentDate$$)
        appendTo(parent, comentCard$$);
    }

}


const getUser = async (id) => {
    let users = await fetchData(urlsToFetch.users);
    for (let user in users) {
        user = users[user];
        if (user.id === id) {
            return user.user_name;
        }
    }
}


const getComments = async (id) => {
    let comments = await fetchData(urlsToFetch.comments);
    let postComents = [];
    // console.log(comments);
    for (let comment in comments) {
        comment = comments[comment];
        if (comment.post === id) {
            postComents.push(comment);
        }
    }
    sortDates(postComents);
    return postComents;
}