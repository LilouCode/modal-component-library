"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _modalModule = _interopRequireDefault(require("./modal.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import PropTypes from "prop-types";
const Modal = _ref => {
  let {
    wrapperBackgroundColor = "#ffffff",
    textContent,
    textFontFamily = "Georgia, 'Times New Roman', Times, serif",
    btnFontFamily = "Georgia, 'Times New Roman', Times, serif",
    textColor = "#00000",
    titleContent,
    textFontWeight,
    titleColor = "#00000",
    textBtn = "Okay",
    textFontSize = "normal",
    btnFontSize = "normal",
    titleFontSize = "super",
    titleFontWeight,
    btnColor = "#acdef3",
    btnBorder = "1px solid black",
    btnBackgroundColor = "#0b0b13",
    borderRadius = "round",
    closeIcon
  } = _ref;
  const [isModalOpen, setModal] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    if (textContent.length < 1) {
      throw Error("Must have some text");
    }
  }, [textContent]);
  const borderRadiusMap = {
    oval: "50px",
    round: "10px",
    square: "0px"
  };
  const fontSizeMap = {
    tiny: "12px",
    small: "14px",
    normal: "16px",
    large: "18px",
    super: "20px",
    extra: "24px",
    giant: "34px"
  };
  return isModalOpen ? /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.background,
    style: {
      position: "absolute",
      left: "0px",
      top: "0",
      zIndex: "99999"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "alert",
    className: _modalModule.default.wrapper,
    style: {
      backgroundColor: wrapperBackgroundColor,
      fontFamily: textFontFamily
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _modalModule.default.close,
    role: "button",
    alt: "close the dialog",
    onClick: () => {
      setModal(false);
    },
    src: closeIcon
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.main
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: _modalModule.default.text,
    style: {
      color: titleColor,
      fontSize: fontSizeMap[titleFontSize],
      fontWeight: titleFontWeight
    }
  }, titleContent), /*#__PURE__*/_react.default.createElement("p", {
    className: _modalModule.default.text,
    style: {
      color: textColor,
      fontSize: fontSizeMap[textFontSize],
      fontWeight: textFontWeight
    }
  }, textContent), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      setModal(false);
    },
    className: _modalModule.default.button,
    style: {
      color: btnColor,
      fontFamily: btnFontFamily,
      backgroundColor: btnBackgroundColor,
      fontSize: fontSizeMap[btnFontSize],
      borderRadius: borderRadiusMap[borderRadius],
      border: {
        btnBorder
      }
    }
  }, textBtn)))) : null;
}; // Modal.propTypes = {
//   textFontFamily: PropTypes.string,
//   btnFontFamily: PropTypes.string,
//   btnColor: PropTypes.string,
//   borderRadius: PropTypes.oneOf(["oval", "round", "square"]),
//   textColor: PropTypes.string,
//   textContent: PropTypes.string.isRequired,
//   textFontSize: PropTypes.oneOf([
//     "tiny",
//     "small",
//     "normal",
//     "large",
//     "super",
//     "extra",
//   ]),
//   btnFontSize: PropTypes.oneOf([
//     "tiny",
//     "small",
//     "normal",
//     "large",
//     "super",
//     "extra",
//   ]),
// };


var _default = Modal;
exports.default = _default;