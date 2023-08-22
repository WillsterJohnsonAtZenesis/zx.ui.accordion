/* ************************************************************************

   Copyright: 2023 ZenesisUK

   License: MIT license

   Authors: Will Johnson (WillsterJohnson)

************************************************************************ */

/**
 * Generates controlled or randomised paragraph outlines for use as skeleton
 * text.
 */
qx.Class.define("zx.ui.SkeletonText", {
  extend: qx.ui.core.Widget,

  /**
   * After setting lines (either passing it here or setting it later), call
   * {@link #init} to build the lines.
   *
   * @param {number[] | number} [lines] A list of line lengths to display, or a
   *   number of lines to randomly generate.
   */
  construct(lines) {
    super();
    this._setLayout(new qx.ui.layout.VBox());
    if (lines) this.setLines(lines);
  },

  properties: {
    appearance: {
      init: "skeleton-text",
      refine: true
    },

    /**
     * The number of lines to randomly generate, or the list of line lengths to
     * use.
     */
    lines: {
      check: "Array||Integer",
      nullable: false,
      apply: "_applyLines"
    },

    /**
     * The percentage by which to scale the width of the lines.
     *
     * Interpreted as `1` = 100%, `0.5` = 50%, &c.
     */
    widthScaleFactor: {
      check: "Number",
      nullable: false,
      init: 1
    }
  },

  members: {
    __lines: null,

    /**
     * Build the currently configured lines.
     */
    init() {
      let lines = this.getLines();
      if (typeof lines === "number") lines = this._generateText(lines);
      this._addText(lines);
    },

    /**
     * Apply for the lines property.
     */
    _applyLines() {
      if (!Array.isArray(this.__lines)) return;
      this.__lines.forEach(line => this._remove(line));
      this.__lines = null;
      this.init();
    },

    /**
     * Generate a random list of line lengths.
     *
     * @param {number} lines The number of line lengths to generate.
     * @returns {number[]} A list of line lengths.
     */
    _generateText(lines) {
      const lineLengths = [];
      for (let i = 0; i < lines; i++) {
        lineLengths.push(
          Math.floor(((Math.random() + 0.4) ** 0.5) * (100 * this.getWidthScaleFactor()))
        );
      }
      return lineLengths;
    },

    /**
     * Build the lines from a list of line lengths.
     * @param {number[]} lineLengths A list of line lengths.
     */
    _addText(lineLengths) {
      this.__lines = lineLengths.map(length => {
        const line = new qx.ui.basic.Label();
        line.setAppearance(`${this.getAppearance()}-line`);
        line.setWidth(length);
        this._add(line);
        return line;
      });
    }
  }
});
