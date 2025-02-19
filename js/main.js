"use strict";

let header = new HeaderComponent(true);
let filter = new FilterComponent(true);
let cursorsList = new CursorsListComponent(true);
let footer = new FooterComponent(true);
let warning = new WarningComponent(true);

filter.setCursorsList(cursorsList);

// Render static cursors
cursorsList.addHeading('Static Cursors');
cursorsList.renderCursor('alternate-select__black');
cursorsList.renderCursor('alternate-select__white');
cursorsList.renderCursor('diagonal-resize-1__black');
cursorsList.renderCursor('diagonal-resize-1__white');
cursorsList.renderCursor('diagonal-resize-2__black');
cursorsList.renderCursor('diagonal-resize-2__white');
cursorsList.renderCursor('handwriting__black');
cursorsList.renderCursor('handwriting__white');
cursorsList.renderCursor('help-select__black');
cursorsList.renderCursor('help-select__white');
cursorsList.renderCursor('horizontal-resize__black');
cursorsList.renderCursor('horizontal-resize__white');
cursorsList.renderCursor('link-select__black');
cursorsList.renderCursor('link-select__white');
cursorsList.renderCursor('move__black');
cursorsList.renderCursor('move__white');
cursorsList.renderCursor('normal-select__black');
cursorsList.renderCursor('normal-select__white');
cursorsList.renderCursor('precision-select__default');
cursorsList.renderCursor('text-select__black');
cursorsList.renderCursor('text-select__white');
cursorsList.renderCursor('unavailable__black');
cursorsList.renderCursor('unavailable__white');
cursorsList.renderCursor('vertical-resize__black');
cursorsList.renderCursor('vertical-resize__white');

// Render animated cursors (first frame only)
cursorsList.addHorizontalRule();
cursorsList.addHeading('Animated Cursors');
cursorsList.renderCursor('busy', true);
cursorsList.renderCursor('working-in-background__white', true);
cursorsList.renderCursor('working-in-background__black', true);
