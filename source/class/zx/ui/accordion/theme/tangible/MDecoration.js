/* ************************************************************************

   Copyright: 2023 ZenesisUK

   License: MIT license

   Authors: Will Johnson (WillsterJohnson)

************************************************************************ */

qx.Theme.define("zx.ui.accordion.theme.tangible.MDecoration", {
  decorations: {
    /*
      ---------------------------------------------------------------------------
        ACCORDION
      ---------------------------------------------------------------------------
    */

    "accordion-panel-header": {
      include: "box",
      style: {
        width: [0, 0, 1, 0],
        color: "primary"
      }
    },

    "accordion-minimap-panel-header": {
      include: "accordion-panel-header",
      style: {
        radius: [0, 0, 0, 0]
      }
    },

    "accordion-minimap": {
      style: {
        radius: 0,
        shadowVerticalLength: [2, 4, 1],
        shadowBlurRadius: [4, 5, 10],
        shadowSpreadRadius: [-1, 0, 0],
        shadowHorizontalLength: 0,
        shadowColor: ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.14)", "rgba(0, 0, 0, 0.12)"]
      }
    },

    "accordion-minimap-tooltip": {
      style: {
        radius: 10,
        shadowVerticalLength: [2, 4, 1],
        shadowBlurRadius: [4, 5, 10],
        shadowSpreadRadius: [-1, 0, 0],
        shadowHorizontalLength: 0,
        shadowColor: ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.14)", "rgba(0, 0, 0, 0.12)"]
      }
    }
  }
});
