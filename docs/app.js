import { DotApp, DotRouter } from './_snowpack/pkg/@neondot/dot.js';
import ViewHome from './views/ViewHome.js';
import ViewClasses from './views/ViewClasses.js';
import BaseNavigator from './components/BaseNavigator/index.js';
import BaseFooter from './components/BaseFooter/index.js';
import HomeHero from './components/HomeHero/index.js';
import MdContainer from './components/MdContainer/index.js';

const home = new ViewHome();
const classes = new ViewClasses();
const router = new DotRouter([home, classes]);

const app = new DotApp();
app.create(document.querySelector('#app'));
app.mount(new BaseNavigator());

app.use(false, router);

app.mount(new BaseFooter());