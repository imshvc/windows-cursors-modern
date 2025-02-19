"use strict";

/**
 * Filter component
 */
class FilterComponent extends BaseComponent {
  /**
   * @constructor
   * @param {boolean} render Call render() method
   * @returns {FilterComponent}
   */
  constructor(render = false) {
    super();

    this.element = document.createElement('div');
    this.element.className = 'filter';
    this.html = '';
    this.rendered = false;
    this.cursorsList = null;

    this.html += `<h2>Filter by name</h2>`;
    this.html += `<input type="text">`;

    this.element.innerHTML = this.html;

    this.input = this.element.querySelector('input');
    this.input.addEventListener('keyup', e => {
      return this._eventHandler(e, this)
    });

    if (render) {
      this.render(); 
    }
  }

  /**
   * Event handler for the input
   * @method
   * @private
   * @param {Event} e
   */
  _eventHandler(e, self) {
    if (self.cursorsList === null) {
      return;
    }

    for (let index in self.cursorsList.references) {
      let reference = self.cursorsList.references[index];

      for (let word of self.input.value.split(' ')) {
        let display = index.toLowerCase().includes(word) ? 'inline-block' : 'none';

        if (reference instanceof HTMLElement) {
          reference.style.display = display;
        } else {
          for (let index2 in reference) {
            reference[index2].style.display = display;
          }
        }
      }

    }
  }

  /**
   * Set reference to the Cursor List component
   * @param {CursorsListComponent} reference Reference to the Cursor List component
   * @method
   */
  setCursorsList(reference) {
    this.cursorsList = reference;
  }
}
