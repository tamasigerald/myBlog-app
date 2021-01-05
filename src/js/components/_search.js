import {appendTo, removeChildsIf} from '../utilities/_functions';
import { inputElements } from '../utilities/_data';
import { createInput } from '../utilities/_functions';
import { router } from '../utilities/_router';
import { searchResults } from './_searchResult';


// The search Bar
export const search = async (parent, posts) => {
    const searchContainer$$ = document.createElement('div');
    searchContainer$$.classList.add('header__search__container');
    const elClass = 'header__search';
    let searchArr = inputElements['search'];
    createInput(searchContainer$$, searchArr, elClass);
    const predictions$$ = document.createElement('ul');
    predictions$$.classList.add('header__preditions');
    appendTo(searchContainer$$, predictions$$);
    appendTo(parent, searchContainer$$);

    const searchInput$$ = document.querySelector('.header__search');
    searchInput$$.addEventListener('input', () => {
        const main$$ = document.querySelector('.app__content');
        let value = searchInput$$.value.toLowerCase();
        let filteredData = posts.filter(element => element.title.toLowerCase().includes(value.toLowerCase()));
        if (value != '') {
            getPredicitons(filteredData, predictions$$, searchInput$$, main$$);
            searchResults(main$$, filteredData);
        }
        if (value == '') {
            let filteredData = [];
            getPredicitons(filteredData, predictions$$);
            searchResults(main$$, posts);
        }
    })
}

const getPredicitons = (arr, parent, input, parentSearch) => {
    removeChildsIf(parent)
    let arrSearch = [];
    parent.style.display = 'block';
    arr.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.title;
        appendTo(parent, li);
        li.addEventListener('click', (e) => {
            input.value = element.title;
            arrSearch.push(element);
            searchResults(parentSearch, arrSearch);
            parent.style.display = 'none';
        })
    });

}