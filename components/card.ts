class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // styles
        const css = document.createElement('link');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('href', 'styles/card.css');

        shadow.appendChild(css);

        // root
        const root = document.createElement('div');
        root.setAttribute('class', 'card');

        // attach the children of the component to the root
        for (let child of this.children) {
            root.appendChild(child);
        }
    
        shadow.appendChild(root);
    }

} 

window.customElements.define('custom-card', Card);