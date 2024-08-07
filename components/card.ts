class Card extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // styles
    const css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "styles/card.css");

    shadow.appendChild(css);

    // root
    this.root = document.createElement("div");
    this.root.setAttribute("class", "card");

    // attach the children of the component to the root
    this.root.innerHTML = `
        <slot>
    `;

    shadow.appendChild(this.root);
  }

  static get observedAttributes() {
    return ["style"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "style") {
      this.applyCustomStyles(newValue);
    }
  }

  applyCustomStyles(styles) {
    const styleRules = styles
      .split(";")
      .map((rule) => rule.trim())
      .filter((rule) => rule);
    styleRules.forEach((rule) => {
      const [property, value] = rule.split(":").map((part) => part.trim());
      this.root.style[property] = value;
    });
  }
}

window.customElements.define("custom-card", Card);
