import { DotComponent, html, register } from '../../_snowpack/pkg/@neondot/dot.js';

class BaseFooter extends DotComponent {
  static get tag() { return 'base-footer' }

  constructor() {
    super();

    this.$template = () => html`
      <style>
        @import '/components/BaseFooter/index.css';
      </style>
      <footer>
        <div class="container">
          <span>All content is open source released under MIT licence</span>
          <span>Created By <a href="https://github.com/borradaniele" target="_blank">Borra Daniele</a></span>
        </div>
      </footer>
    `;
  }
}

register(BaseFooter);

export default BaseFooter;
