import { DotApp, DotRouter } from './_snowpack/pkg/@neondot/dot.js';
import ViewHome from './views/ViewHome.js';
import ViewDoc from './views/ViewDoc.js';
import BaseNavigator from './components/BaseNavigator/index.js';

const home = new ViewHome();
const doc = new ViewDoc();
const router = new DotRouter([home, doc]);

const app = new DotApp();
app.create(document.querySelector('#app'));
app.mount(new BaseNavigator());

app.use(false, router);
