class Header extends HTMLElement {
    #children = [];

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // styles
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'styles.css');

        // root
        const root = document.createElement('div');
        root.setAttribute('class', 'root');

        // logo div
        const logo = document.createElement('div');
        logo.setAttribute('class', 'logo');

        // logo img and link to go on click
        const logoImg = document.createElement('img');
        const logoImgSrc = this.getAttribute('logoSrc') ?? '';
        logoImg.setAttribute('src', logoImgSrc);
        logoImg.setAttribute('class', 'logoImg');
        logoImg.addEventListener('click', () => {
            window.location.href = logoImgSrc;
        });

        logo.appendChild(logoImg);

        // links
        const links = document.createElement('div');
        links.setAttribute('class', 'links');
        this.querySelectorAll('a').forEach(link => {
            links.appendChild(link);
        })

        // build the children of the root component
        root.appendChild(logo);
        root.appendChild(links);

        // append link and root to shadow root
        shadow.appendChild(link);
        shadow.appendChild(root);
    }
}



window.customElements.define('custom-header', Header)