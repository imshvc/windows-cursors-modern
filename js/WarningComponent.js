"use strict";

/**
 * Warning component
 */
class WarningComponent extends BaseComponent {
  /**
   * @constructor
   * @param {boolean} render Call render() method
   * @returns {FilterComponent}
   */
  constructor(render = false) {
    super();

    this.element = document.createElement('div');
    this.element.className = 'warning-element';
    this.element.dataset.hidden = '1';
    this.html = '';
    this.rendered = false;

    this.html += `<div class="title">Warning</div>`;
    this.html += `<div class="text">`;
    this.html += `  <b>Device Pixel Ratio</b> must be a round value, which it is not (<span class="device-pixel-ratio"></span>).<br>`;
    this.html += `  This may impact cursor legibility and pixel alignment.<br><br>`.trim();
    this.html += `  Fix this by zooming in or out until the warning box disappears.`.trim();
    this.html += `</div>`;

    this.element.innerHTML = this.html;

    if (render) {
      this.render();
    }

    // Assign event handler
    if ('devicePixelRatio' in window) {
      window.addEventListener('mousemove', e => this._eventHandler(e, this));
      window.addEventListener('resize', e => this._eventHandler(e, this));
      this._eventHandler({}, this);
    }
  }

  /**
   * Window event handler for device pixel ratio warning.
   * @method
   */
  _eventHandler(e, self) {
    if (self.rendered === false) {
      return;
    }

    self.element.querySelector('span.device-pixel-ratio').innerText = window.devicePixelRatio.toFixed(2);
    self.element.dataset.hidden = window.devicePixelRatio.toString().includes('.') ? 0 : 1;
  }
}
