import template from './template.html';

export default class AwcIcon extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'size', 'color', 'path']
    }

    constructor() {
        super();
        this._render();
    }

    get view() {
        return this.getAttribute('view') || 1024;
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    get path() {
        return this.getAttribute('path');
    }

    set path(value) {
        this.setAttribute('path', value);
    }

    get size() {
        return this.getAttribute('size');
    }

    set size(value) {
        this.setAttribute('size', value);
    }

    get color() {
        return this.getAttribute('color');
    }

    set color(value) {
        this.setAttribute('color', value);
    }

    connectedCallback() {
        this.iconEl = this.shadowRoot.querySelector('.icon');
        this.useEl = this.shadowRoot.querySelector('use');
        this.pathEl = this.shadowRoot.querySelector('path');
        this.size && (this.size = this.size);
        this.color && (this.color = this.color);
        this.name && (this.name = this.name);
        this.path && (this.path = this.path);
        this._initPage();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'name' && this.useEl) {
            this.useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../assets/icon.svg#icon-${newVal}`)
        }
        if (name === 'path' && this.pathEl) {
            this.pathEl.setAttribute('d', newVal);
        }
        if (name === 'color' && this.iconEl) {
            this.iconEl.style.color = newVal;
        }
        if (name === 'size' && this.iconEl) {
            this.iconEl.style.fontSize = newVal + 'px';
        }
    }

    _render() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    _initPage() {
        this.iconEl.setAttribute('view', `0 0 ${this.view} ${this.view}`);
        if (this.path) {
            this.pathEl.style.display = "block";
            this.useEl.style.display = "none";
        } else {
            this.pathEl.style.display = "none";
            this.useEl.style.display = "block";
        }
    }
}

if (!customElements.get('awc-icon')) {
    customElements.define('awc-icon', AwcIcon)
}

