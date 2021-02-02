import { DotApp, DotRouter } from '@neondot/dot';
import ViewHome from './views/ViewHome';
import ViewClasses from './views/ViewClasses';
import BaseNavigator from './components/BaseNavigator';
import HomeHero from './components/HomeHero';
import MdContainer from './components/MdContainer';

const home = new ViewHome();
const classes = new ViewClasses();
const router = new DotRouter([home, classes]);

const app = new DotApp();
app.create(document.querySelector('#app'));
app.mount(new BaseNavigator());

app.use(false, router);
