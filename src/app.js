import { DotApp, DotRouter } from '@neondot/dot';
import ViewHome from './views/ViewHome';
import ViewDoc from './views/ViewDoc';
import BaseNavigator from './components/BaseNavigator';

const home = new ViewHome();
const doc = new ViewDoc();
const router = new DotRouter([home, doc]);

const app = new DotApp();
app.create(document.querySelector('#app'));
app.mount(new BaseNavigator());

app.use(false, router);
