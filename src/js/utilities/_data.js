import { fnSignOut } from "./_functions";
import { router } from "./_router";

// Log state
let logState = {
    "state": false,
    "user": ""
};


// API links


const urlsToFetch = {
    "users": "https://gerald-myblog-api.herokuapp.com/users",
    "posts": "https://gerald-myblog-api.herokuapp.com/posts",
    "comments": "https://gerald-myblog-api.herokuapp.com/comments"
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
            "type": "text",
            "placeholder": "your comment",
            "name": "comment",
            "data-function": "comment",
            "required": ""
        }
    }

}



// Array of generated links
let links = {
    "logged": [{
            "name": "add post",
            "fn": ""
        },
        {
            "name": "my account",
            "fn": ""
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