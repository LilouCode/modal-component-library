"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _modalModule = _interopRequireDefault(require("./modal.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    wrapperBackgroundColor = "#ffffff",
    textContent,
    textFontFamily = "Georgia, 'Times New Roman', Times, serif",
    btnFontFamily = "Georgia, 'Times New Roman', Times, serif",
    textColor = "#00000",
    textBtn,
    textFontSize = "normal",
    btnFontSize = "normal",
    btnColor = "#acdef3",
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
    extra: "24px"
  };
  return isModalOpen ? /*#__PURE__*/React.createElement("div", {
    className: _modalModule.default.background
  }, /*#__PURE__*/React.createElement("div", {
    role: "alert",
    className: _modalModule.default.wrapper,
    style: {
      backgroundColor: wrapperBackgroundColor,
      fontFamily: textFontFamily
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: _modalModule.default.close,
    role: "button",
    alt: "close the dialog",
    onClick: () => {
      setModal(false);
    },
    src: closeIcon
  }), /*#__PURE__*/React.createElement("div", {
    className: _modalModule.default.main
  }, /*#__PURE__*/React.createElement("p", {
    className: _modalModule.default.text,
    style: {
      color: textColor,
      fontSize: fontSizeMap[textFontSize]
    }
  }, textContent), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setModal(false);
    },
    className: _modalModule.default.button,
    style: {
      color: btnColor,
      fontFamily: btnFontFamily,
      backgroundColor: btnBackgroundColor,
      fontSize: fontSizeMap[btnFontSize],
      borderRadius: borderRadiusMap[borderRadius]
    }
  }, textBtn)))) : null;
};

exports.Modal = Modal;
Modal.propTypes = {
  textFontFamily: _propTypes.default.string,
  btnFontFamily: _propTypes.default.string,
  btnColor: _propTypes.default.string,
  borderRadius: _propTypes.default.oneOf(["oval", "round", "square"]),
  textColor: _propTypes.default.string,
  textContent: _propTypes.default.string.isRequired,
  textFontSize: _propTypes.default.oneOf(["tiny", "small", "normal", "large", "super", "extra"]),
  btnFontSize: _propTypes.default.oneOf(["tiny", "small", "normal", "large", "super", "extra"])
};