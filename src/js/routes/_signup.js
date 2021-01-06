import { removeLoading } from "../components/_loading";
import { mainBtn } from "../components/_mainBtn";
import { urlsToFetch } from "../utilities/_data";
import { appendTo, createForm, defaultInput, fetchData, inputIsGood, inputIsWrong, postToApi, removeChildsIf, sectionTitle } from "../utilities/_functions";
import { router } from "../utilities/_router";



// Sign up page
export const signUpForm = async () => {
    let isLoaded = false;
    const main$$ = document.querySelector('.app__content');
    removeChildsIf(main$$);
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    sectionTitle(container$$, 'sign Up', 'form__title');
    createForm(container$$, 'signUp');
    appendTo(main$$, container$$);
    let users = await fetchData(urlsToFetch.users);
    // let posts = await fetchData(urlsToFetch[1].url);

    const form = document.querySelector('#userForm');
    console.log(form);
    let userNames = [];
    console.log(userNames);
    let emails = [];
    for (let user in users) {
        user = users[user];
        userNames.push(user.user_name);
        emails.push(user.email);
    }
    signUpCheckPasswords(form);
    signUpCheckUserName(form, userNames);
    signUpCheckEmail(form, emails);
    removeLoading(isLoaded);
    mainBtn(main$$, `sign Up`, () => {
        form.reportValidity();
        fnSignUp(form, users);
    }, 'form', 'userForm')
}

const signUpCheckPasswords = (form) => {
    const pwd$$ = form.querySelector('[data-function="password"]');
    const checkPwd$$ = form.querySelector('[data-function="check_password"]');
    checkPwd$$.addEventListener('input', () => {
        if (checkPwd$$.value == '') {
            defaultInput(checkPwd$$);
        } else if (checkPwd$$.value != pwd$$.value || checkPwd$$ < 8) {
            inputIsWrong(checkPwd$$);
        } else if (checkPwd$$.value == pwd$$.value) {
            inputIsGood(checkPwd$$);
        }
    })
    pwd$$.addEventListener('input', () => {
        if (pwd$$.value == '') {
            defaultInput(pwd$$);
        } else if (pwd$$.value.length < 8) {
            inputIsWrong(pwd$$);
        } else if (pwd$$.value.length >= 8) {
            inputIsGood(pwd$$);
        }
        if (checkPwd$$.value == '') {
            defaultInput(checkPwd$$);
        } else if (checkPwd$$.value != pwd$$.value || checkPwd$$ < 8) {
            inputIsWrong(checkPwd$$);
        } else if (checkPwd$$.value == pwd$$.value) {
            inputIsGood(checkPwd$$);
        }
    })
    pwd$$.addEventListener('input', () => {
        if (pwd$$.value == checkPwd$$.value) {
            checkPwd$$.setCustomValidity('');
        } else {
            checkPwd$$.setCustomValidity('Passwords must match');
        }
    })
    checkPwd$$.addEventListener('input', () => {
        if (pwd$$.value == checkPwd$$.value) {
            checkPwd$$.setCustomValidity('');
        } else {
            checkPwd$$.setCustomValidity('Passwords must match!');
        }
    })
}


const signUpCheckUserName = (form, userNames) => {
    const usrName$$ = form.querySelector('[data-function="username"]');
    usrName$$.addEventListener('input', () => {
        if (!userNames.includes(usrName$$.value)) {
            usrName$$.setCustomValidity('');
            inputIsGood(usrName$$);
        } else {
            usrName$$.setCustomValidity('User already exists!');
            inputIsWrong(usrName$$);
        }
        if (usrName$$.value == '') {
            defaultInput(usrName$$)
        }
    })
}

const signUpCheckEmail = (form, emails) => {
    const email$$ = form.querySelector('[data-function="email"]');
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    email$$.addEventListener('input', () => {
        if (re.test(email$$.value)) {
            if (!emails.includes(email$$.value)) {
                email$$.setCustomValidity('')
                inputIsGood(email$$);
            } else {
                email$$.setCustomValidity('Email already exist!');
                inputIsWrong(email$$);
            }
        } else {
            email$$.setCustomValidity('Email not valid!');
            inputIsWrong(email$$);
        }
        if (email$$.value == '') {
            defaultInput(email$$);
        }
    })
}

const fnSignUp = async (form, users) => {
    // const main$$ = document.querySelector('.app__content');
    const usrName$$ = form.querySelector('[data-function="username"]');
    const firstName$$ = form.querySelector('[data-function="first_name"]');
    const lastName$$ = form.querySelector('[data-function="last_name"]');
    const pwd$$ = form.querySelector('[data-function="password"]');
    // const checkPwd$$ = form.querySelector('[data-function="check_password"]');
    const email$$ = form.querySelector('[data-function="email"]');
    const newUser = {
        "id": 0,
        "user_name": `${usrName$$.value}`,
        "password": `${pwd$$.value}`,
        "first_name": `${firstName$$.value}`,
        "last_name": `${lastName$$.value}`,
        "email": `${email$$.value}`,
        "role": "blogger"
    }
    if (form.checkValidity()) {
        const alert = signUpMessage();
        postToApi(newUser, urlsToFetch.users);
        const thisTimeout = setTimeout(() => {
            router.load('home');
        }, 1200);
    } else {
    }
}

const signUpMessage = () => {
    alert('Welcome to myBlog App.\nDon\'t forget to sign In :)')

}


