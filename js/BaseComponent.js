"use strict";

/**
 * Base Component
 */
class BaseComponent {
  /**
   * @constructor
   * @returns {BaseComponent}
   */
  constructor() {
    this.element = null;
    this.html = null;
    this.rendered = false;
  }

  /**
   * Append element to body
   * @method
   */
  render() {
    if (this.rendered === false) {
      document.body.appendChild(this.element);
      this.rendered = true;
    }
  }
}
