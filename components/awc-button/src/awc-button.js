import "./style.css"
import template from './template.html';

export default class AwcButton extends HTMLElement {
  static get observedAttributes() {
      return ['disabled', 'loading', 'icon']
  }

  constructor() {
      super()
      this._render();
  }

  get disabled() {
      return this.getAttribute('disabled') !== null;
  }

  set disabled(value) {
      if (value === null || value === false) {
          this.removeAttribute('disabled');
      } else {
          this.setAttribute('disabled', '')
      }
  }

  get loading() {
      return this.getAttribute('loading') !== null;
  }

  set loading(value) {
      if (value === null || value === false) {
          this.removeAttribute('loading');
      } else {
          this.setAttribute('loading', '')
      }
  }

  get icon() {
      return this.getAttribute('icon');
  }

  set icon(value) {
      this.setAttribute('icon', value);
  }

  connectedCallback() {
      this.btnEl = this.shadowRoot.getElementById('btn')
      this.icoEl = this.shadowRoot.getElementById('icon');
      this.loadEl = document.createElement('awc-loading');
      this.loadEl.style.color = 'inherit';
      this.disabled = this.disabled;
      this.loading = this.loading;
  }

  attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'disabled' && this.btnEl) {
          if (newVal !== null) {
              this.btnEl.setAttribute('disabled', 'disabled')
          } else {
              this.btnEl.removeAttribute('disabled');
          }
      }

      if (name === 'loading' && this.btnEl) {
          if (newVal !== null) {
              this.shadowRoot.prepend(this.loadEl);
              this.btnEl.setAttribute('disabled', 'disabled');
          } else {
              this.shadowRoot.removeChild(this.loadEl);
              this.btnEl.removeAttribute('disabled');
          }
      }

      if (name === 'icon' && this.icoEl) {
          this.icoEl.name = newVal;
      }
  }

  _render() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML =template;
  }
}

if (!customElements.get('awc-button')) {
    customElements.define('awc-button', awcButton);
}
