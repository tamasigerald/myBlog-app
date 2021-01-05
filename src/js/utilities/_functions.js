import { inputElements, logState } from "./_data";
import { router } from "./_router";

// UTILITY FUNCTIONS

// Fetch url
export const fetchData = async (url) => {
    let result = await fetch(url)
    result = await result.json();
    return result;
}



// STYLE FUNCTIONS

// Toggle classes on element
export const toggleClass = (element, elClass) => {
    element.classList.toggle(`${elClass}`);
}

// Removes class if exists in element
export const removeClass = (element, elClass) => {
    if (element.classList.contains(`${elClass}`)) {
        element.classList.remove(`${elClass}`);
    }
}

// Wrong/invalid inputs style
export const inputIsWrong = (input) => {
    input.classList.add('input--wrong');
    input.classList.remove('input--good');
    input.classList.remove('input--base');
}

// Good/valid inputs style
export const inputIsGood = (input) => {
    input.classList.remove('input--wrong');
    input.classList.add('input--good');
    input.classList.remove('input--base');
}

// Default inputs style
export const defaultInput = (input) => {
    input.classList.remove('input--wrong');
    input.classList.remove('input--good');
    input.classList.add('input--base');
}

const resizeContent = (content) => {
    content.style.setProperty(`min-height`, `calc(${window.innerHeight}px - 100px)`);
}

export const resizeContentWrapper = (content) => {
    resizeContent(content)
    window.addEventListener('resize', () => {
        resizeContent(content);

    });
}


// LAYOUT FUNCTIONS

// Append element2 to element1
export const appendTo = (el1, el2) => {
    el1.appendChild(el2);
}

// Remove element
export const removeElement = (element) => {
    element.remove();
}

// Removes all children nodes from parent node
export const removeAllChildNodes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Removes all childs nodes if parent node exists
export const removeChildsIf = (element) => {
    if (element) {
        removeAllChildNodes(element);
    }
}

// Sorts by date -- newer to older
export const sortDates = (arr) => {
    return arr.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
}

// Scrolls to top
export const scrollToTop = () => {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Generates a section title and assigns class prop
export const sectionTitle = (parentNode, title) => {
    const h2$$ = document.createElement('h2');
    h2$$.classList.add('header__title');
    h2$$.innerHTML = `${title}`;
    appendTo(parentNode, h2$$);
}

// Creates form -> signIn and signUp
export const createForm = (parentNode, props) => {
    for (let form in inputElements) {
        if (form === `${props}`) {
            if (props === 'search') {} else {
                form = inputElements[form]
                const createForm$$ = document.createElement('form');
                createForm$$.classList.add('form__container');
                createForm$$.setAttribute('id', 'userForm');
                if (props === 'signIn') {
                    const icon$$ = document.createElement('span');
                    icon$$.innerHTML = `<i class='bx bxs-user'></i>`;
                    icon$$.classList.add('form__icon');
                    appendTo(createForm$$, icon$$);
                }
                if (props === 'signUp') {
                    const icon$$ = document.createElement('span');
                    icon$$.innerHTML = `<i class='bx bxs-user-plus' ></i>`;
                    icon$$.classList.add('form__icon');
                    appendTo(createForm$$, icon$$);
                }
                const elClass = 'form__input';
                const spClass = 'input--base';
                appendTo(parentNode, createForm$$);
                createInput(createForm$$, form, elClass, spClass);
            }
        }
    }
}

// Creates inputs from array
export const createInput = (parent, arr, elClass, spClass) => {
    for (let input in arr) {
        input = arr[input];
        const createInput$$ = document.createElement('input');
        createInput$$.classList.add(`${elClass}`);
        if (spClass) {
            createInput$$.classList.add(`${spClass}`);
        }
        for (const attribute in input) {
            const attributeValue = input[attribute];
            createInput$$.setAttribute(`${attribute}`, `${attributeValue}`)
        }
        appendTo(parent, createInput$$);
    }
}

// Sign Out
export const fnSignOut = async () => {
    const main$$ = document.querySelector('.app__content');
    logState.state = false;
    logState.user = '';
    window.confirm('You have been succesfully logged out!')
    router.load('home');
}