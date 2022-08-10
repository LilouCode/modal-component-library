"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _modalModule = _interopRequireDefault(require("./modal.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Modal Library
 * 
 * @returns This component returns a modal with only 2 props required and over 16 props to customize, check the read me
 */
const Modal = _ref => {
  let {
    borderRadius = "round",
    btnColor = "#acdef3",
    btnBackgroundColor = "#0b0b13",
    btnBorder = "1px solid black",
    btnFontFamily = "Georgia, 'Times New Roman', Times, serif",
    btnFontSize = "normal",
    closeIcon,
    textBtn = "Okay",
    textColor = "#00000",
    textContent,
    textFontFamily = "Georgia, 'Times New Roman', Times, serif",
    textFontSize = "normal",
    textFontWeight,
    titleColor = "#00000",
    titleContent,
    titleFontSize = "super",
    titleFontWeight,
    wrapperBackgroundColor = "#ffffff"
  } = _ref;
  const [isModalOpen, setModal] = (0, _react.useState)(true); //manage the state open/close of the modal

  (0, _react.useEffect)(() => {
    if (textContent.length < 1) {
      //if there is no text 
      throw Error("Must have some text");
    }
  }, [textContent]);
  const borderRadiusMap = {
    //options for borders
    oval: "50px",
    round: "10px",
    square: "0px"
  };
  const fontSizeMap = {
    //option for font size
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
};

Modal.propTypes = {
  borderRadius: _propTypes.default.oneOf(["oval", "round", "square"]),
  btnColor: _propTypes.default.string,
  btnBackgroundColor: _propTypes.default.string,
  btnBorder: _propTypes.default.string,
  btnFontFamily: _propTypes.default.string,
  btnFontSize: _propTypes.default.oneOf(["tiny", "small", "normal", "large", "super", "extra", "giant"]),
  closeIcon: _propTypes.default.string,
  textBtn: _propTypes.default.string,
  textColor: _propTypes.default.string,
  textContent: _propTypes.default.string.isRequired,
  textFontFamily: _propTypes.default.string,
  textFontSize: _propTypes.default.oneOf(["tiny", "small", "normal", "large", "super", "extra", "giant"]),
  textFontWeight: _propTypes.default.string,
  titleColor: _propTypes.default.string,
  titleContent: _propTypes.default.string,
  titleFontSize: _propTypes.default.string,
  titleFontSize: _propTypes.default.string,
  wrapperBackgroundColor: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;