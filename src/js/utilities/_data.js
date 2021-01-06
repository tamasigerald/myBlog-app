import { fnSignOut } from "./_functions";
import { router } from "./_router";

// Log state
let logState = {
    "state": false,
    "user_name": "",
    "user_id": ""
};


// API links


// const urlsToFetch = {
//     "users": "http://localhost:3030/users",
//     "posts": "http://localhost:3030/posts",
//     "comments": "http://localhost:3030/comments"
// }
const baseUrl = process.env.BASE_URL;
console.log("THE BASEURLK", baseUrl);

const urlsToFetch = {
    "users": baseUrl + "/users",
    "posts": baseUrl + "/posts",
    "comments": baseUrl + "/comments"
}


// Array of generates inputs
const inputElements = {
    "search": {
        "search": {
            "type": "text",
            "placeholder": "search",
            "name": "search"
        }
    },
    "signIn": {
        "username": {
            "type": "text",
            "placeholder": "username",
            "name": "username",
            "required": ""
        },
        "password": {
            "type": "password",
            "placeholder": "password",
            "name": "password",
            "required": ""
        },
    },
    "signUp": {
        "first_name": {
            "type": "text",
            "placeholder": "first name",
            "name": "first_name",
            "data-function": "first_name",
            "required": ""
        },
        "last_name": {
            "type": "text",
            "placeholder": "last name",
            "name": "last_name",
            "data-function": "last_name",
            "required": ""
        },
        "username": {
            "type": "text",
            "placeholder": "username",
            "name": "username",
            "data-function": "username",
            "required": ""
        },
        "password": {
            "type": "password",
            "placeholder": "password",
            "name": "password",
            "data-function": "password",
            "minlength": 8,
            "required": ""
        },
        "check_password": {
            "type": "password",
            "placeholder": "confirm password",
            "name": "check_password",
            "data-function": "check_password",
            // "minlength": 8,
            "required": ""
        },
        "email": {
            "type": "email",
            "placeholder": "email",
            "name": "email",
            "data-function": "email",
            "required": ""
        },
    },
    "postComment": {
        "comment": {
            "placeholder": "your comment",
            "name": "comment",
            "data-function": "comment",
            "required": ""
        }
    },
    "addPost": {
        "title": {
            "placeholder": "title",
            "name": "title",
            "data-function": "title",
            "required": ""
        },
        "content": {
            "placeholder": "content",
            "name": "content",
            "data-function": "content",
            "required": ""
        },
    }

}



// Array of generated links
let links = {
    "logged": [{
            "name": "add post",
            "fn": () => {
                router.load('add')
            }
        },
        {
            "name": "my account",
            "fn": () => {
                router.load('account')
            }
        },
        {
            "name": "sign Out",
            "fn": () => {
                fnSignOut()
            }
        }
    ],
    "not_logged": [{
            "name": "sign In",
            "fn": () => {
                router.load('signin');
            }
        },
        {
            "name": "sign Up",
            "fn": () => {
                router.load('signup');
            }
        }
    ]
}


export {logState ,inputElements, urlsToFetch, links};