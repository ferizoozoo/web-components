class Footer extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // styles
        const css = document.createElement('link');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('href', 'styles/footer.css');

        shadow.appendChild(css);

        // root
        const root = document.createElement('div');
        root.setAttribute('class', 'root');

        // get attributes
        const text = this.getAttribute('text');

        // footer text
        root.innerHTML = `
            <div class="footerText">
                <p>${text}</p>
            </div>
        `;

        shadow.appendChild(root);
    }
}

window.customElements.define('custom-footer', Footer);