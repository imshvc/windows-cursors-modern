"use strict";

/**
 * Cursors List component
 */
class CursorsListComponent extends BaseComponent {
  /**
   * @constructor
   * @param {boolean} render Call render() method
   * @returns {CursorsListComponent}
   */
  constructor(render = false) {
    super();
  
    this.element = document.createElement('div');
    this.element.className = 'cursors-list';

    this.references = {};

    if (render) {
      this.render();
    }
  }

  /**
   * Add a horizontal rule.
   * @method
   */
  addHorizontalRule() {
    let element = document.createElement('div');
    element.className = 'hr';
    this.element.appendChild(element);
  }

  /**
   * Add heading text.
   * @param {string} text Heading text
   * @method
   */
  addHeading(text) {
    let element = document.createElement('h2');
    element.textContent = text;
    this.element.appendChild(element);
  }

  /**
   * Create an element inside which we include the image of the cursor
   * and store this element in a list of references indexed by cursor
   * names. This reference list can be used by other components.
   * @method
   * @param {string} cursor Cursor name
   * @param {boolean} animated Animated cursor (default: false)
   */
  renderCursor(cursor, animated = false) {
    let element = document.createElement('div');
    element.className = 'cursor-preview';

    let layer = null;
    let name = cursor;
    let html = '';
    let url = null;

    // has layers
    if (cursor.includes('__')) {
      [name, layer] = cursor.split('__', 2);

      if (name in this.references === false) {
        this.references[name] = {};
      }

      if (layer in this.references[name] === false) {
        this.references[name][layer] = null;
      }
    }

    // no layers
    if (layer === null && name in this.references === false) {
      this.references[name] = null;
    }

    if (animated) {
      url = ASSETS_PATH_ANIMATED + `${name}/${layer ? `${layer}_` : ''}01.${CURSOR_FILETYPE}`;
    } else {
      url = ASSETS_PATH_STATIC + `${name}${layer ? `/${layer}` : ''}.${CURSOR_FILETYPE}`;
    }

    html += `<div class="title">Cursor: <b>${name}</b>${layer ? ` &ndash; Layer: <b>${layer}</b>` : ''}</div>`;
    html += `<div class="preview">`;
    html += `  <img src="${url}" width="${CURSOR_DEFAULT_SIZE}" height="${CURSOR_DEFAULT_SIZE}" alt="${name}${layer ? ` with layer: ${layer}` : ''}">`;
    html += `</div>`;

    // reference
    if (layer) {
      this.references[name][layer] = element;
    } else {
      this.references[name] = element;
    }

    element.innerHTML = html;

    this.element.appendChild(element);
  }
}
