"use strict";

/**
 * Header component
 */
class HeaderComponent extends BaseComponent {
  /**
   * @constructor
   * @param {boolean} render Call render() method
   * @returns {HeaderComponent}
   */
  constructor(render = false) {
    super();

    this.element = document.createElement('div');
    this.element.className = 'header';

    let html = [];

    html.push(`<div class="top-section">`);
    html.push(`  <div class="left">`);
    html.push(`     <span class="brand-text">Cursor Preview</span>`);
    html.push(`  </div>`);
    html.push(`  <div class="center">`);
    html.push(`    <span>${CURSOR_THEME}</span>`);
    html.push(`  </div>`);
    html.push(`  <div class="right">`);
    html.push(`    <span><a href="${GITHUB_RELEASES_URL}" target="_blank" rel="noopener noreferrer">Download</a></span>`);
    html.push(`  </div>`);
    html.push(`</div>`);
    html.push(`<div class="bottom-section">`);
    html.push(`  <span>Bringing delightful experiences to Windows<br>`.trim());
    html.push(`  with <b>fresh</b> and <b>redesigned</b> cursors</span>`.trim());
    html.push(`</div>`);
  
    this.html = html.join(EOL);
    this.element.innerHTML = this.html;

    if (render) {
      this.render();
    }
  }
}
