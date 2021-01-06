import {
    loadingScreen,
    removeLoadingWrapper
} from '../components/_loading';
import {routes} from './_routes';

export class Router {
    constructor(paths, props) {
        this.paths = paths;
        this.props = props;
        this.initRouter();
    }
    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URL = (pathname === "/" || pathname === '/index.html') ? "landing" : pathname.replace("/", "");
        if (URL === 'landing') {
            setTimeout(() => {
                this.load(URL);
            }, 200)
        
        } else {
                this.load(URL, props);
        }
        // setTimeout(() => {
        //     this.load(URL);
        // }, 200)
        // this.load(URL)
    }
    load(page, props) {
        const {
            paths
        } = this;
        const {
            path,
            template
        } = paths[page] || paths.error;
        const content$$ = document.querySelector('.app__content');
        template(content$$, props);
        // if (page != 'landing') {
        //     loadingScreen();
        // } else {
        //     console.log('no')
        // }
            // removeLoadingWrapper(content$$);
        // setTimeout(() => {
            
        // }, 100);
        window.history.replaceState(null, null, path);
    }
}

export const router = new Router(routes);
// router.load('home'); //EXAMPLE