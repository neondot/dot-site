import { DotComponent, html, register } from '@neondot/dot';

class HomeHero extends DotComponent {
  static get tag() { return 'home-hero' }

  constructor() {
    super();

    this.$template = () => html`
      <style>
        @import 'components/HomeHero/index.css';
      </style>
      <div class="home-hero">
        <div class="home-hero__title" @click="${this.shutLetter}">
          <span>N</span><span>e</span><span>o</span><span>n</span><span>&nbsp</span><span>D</span><span>o</span><span>t</span>
        </div>
        <div class="home-hero__subtitle">
          The native reactive components framework
        </div>
      </div>
    `;
  }

  shutLetter(event) {
    event.target.classList.toggle('shutted');
  }
}

register(HomeHero);

export default HomeHero;
