class CardItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.template = document.createElement("div");
    this.template.innerHTML = `
            <slot>
        `;
    shadow.append(this.template);
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
      this.template.style[property] = value;
    });
  }
}

customElements.define("card-item", CardItem);
