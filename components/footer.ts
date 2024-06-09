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

        // footer text
        root.innerHTML = `
            <div class="footerText">
                <p>Copyright &copy; 2020. All rights reserved.</p>
            </div>
        `;

        shadow.appendChild(root);
    }
}

window.customElements.define('custom-footer', Footer);