import HomeHero from '../components/HomeHero/index.js';
import MdContainer from '../components/MdContainer/index.js';
import { DotRoute, html, register } from '../_snowpack/pkg/@neondot/dot.js';
import gsap from '../_snowpack/pkg/gsap.js';

class ViewHome extends DotRoute {
  static get tag() { return 'view-home' }

  constructor() {
    super();

    this.path = '/';

    this.$template = () => html`
      <home-hero></home-hero>

      <md-container file="/content/README.txt"></md-container>
    `;
  }
}

register(ViewHome);

export default ViewHome;