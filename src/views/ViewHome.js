import HomeHero from '../components/HomeHero';
import MdContainer from '../components/MdContainer';
import { DotRoute, html, register } from '@neondot/dot';
import gsap from 'gsap';

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