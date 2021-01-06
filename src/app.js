import './scss/main.scss'
import {createHeader} from './js/layout/_header';
import {createMain} from './js/layout/_main';
// import { router } from './js/utilities/_router';


// MAIN APP HANDLE
const app = () => {
    const app$$ = document.querySelector('#app');

    // Create main structure
    createHeader(app$$);
    createMain(app$$);
}
app();

// window.onload = () => {
//     app();
// }