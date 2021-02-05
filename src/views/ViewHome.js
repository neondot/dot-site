import { DotRoute, html, register } from '@neondot/dot';
import gsap from 'gsap';

class ViewHome extends DotRoute {
  static get tag() { return 'view-home' }

  constructor() {
    super();

    this.$path = '/';

    this.$template = () => html`
      <home-hero></home-hero>

      <md-container ref="container" file="/content/README.txt"></md-container>
    `;
  }

  mounted() {
    this.$refs.container.load();
  }
}

register(ViewHome);

export default ViewHome;