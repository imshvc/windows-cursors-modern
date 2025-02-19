"use strict";

/**
 * Footer component
 */
class FooterComponent extends BaseComponent {
  /**
   * @constructor
   * @param {boolean} render Call render() method
   * @returns {FilterComponent}
   */
  constructor(render = false) {
    super();

    this.element = document.createElement('div');
    this.element.className = 'footer';
    this.html = '';
    this.rendered = false;

    this.html += `<center>Made with ❤️ by <a href="${GITHUB_PROFILE}" target="_blank" rel="noopener noreferer">${AUTHOR_NAME}</a></center>`;

    this.element.innerHTML = this.html;

    if (render) {
      this.render();
    }
  }
}
