import {landingPage} from "../routes/_landing"
import {homePage} from "../routes/_home"
import {recentPosts} from "../routes/_recents";
import { signInForm } from "../routes/_signin";
import { signUpForm } from "../routes/_signup";
import { tagPosts } from "../routes/_tagPost";
import { postPage } from "../routes/_post";
import { addPost } from "../routes/_add";
import { editPost } from "../routes/_edit";




export const routes = {
    landing: {
        path: "/",
        template: landingPage,
    },
    home: {
        path: "/",
        template: homePage,
    },
    recents: {
        path: "/",
        template: recentPosts,
    },
    tagPosts: {
        path: "/",
        template: tagPosts,
    },
    signin: {
        path: "/",
        template: signInForm,
    },
    signup: {
        path: "/",
        template: signUpForm,
    },
    post: {
        path: "/",
        template: postPage,
    },
    add: {
        path: "/",
        template: addPost,
    },
    edit: {
        path: "/",
        template: editPost,
    },
    account: {
        path: "/",
        // template: homePage,
    },
}