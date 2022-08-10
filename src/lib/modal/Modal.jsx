import React from "react";
import { useState, useEffect } from "react";
import styles from "./modal.module.css";
// import PropTypes from "prop-types";

const Modal = ({
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
  titleFontSize ="super",
  titleFontWeight,
  btnColor = "#acdef3",
  btnBorder = "1px solid black",
  btnBackgroundColor = "#0b0b13",
  borderRadius = "round",
  closeIcon,
}) => {
  const [isModalOpen, setModal] = useState(true);
  useEffect(() => {
    if (textContent.length < 1) {
      throw Error("Must have some text");
    }
  }, [textContent]);
  const borderRadiusMap = {
    oval: "50px",
    round: "10px",
    square: "0px",
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
  return isModalOpen ? (
    <div
      className={styles.background}
      style={{ position: "absolute", left: "0px", top: "0", zIndex: "99999" }}
    >
      <div
        role="alert"
        className={styles.wrapper}
        style={{
          backgroundColor: wrapperBackgroundColor,
          fontFamily: textFontFamily,
        }}
      >
        <img
          className={styles.close}
          role="button"
          alt="close the dialog"
          onClick={() => {
            setModal(false);
          }}
          src={closeIcon}
        />
        <div className={styles.main}>
          <h2
            className={styles.text}
            style={{ color: titleColor, fontSize: fontSizeMap[titleFontSize], fontWeight: titleFontWeight }}
          >
            {titleContent}
          </h2>
          <p
            className={styles.text}
            style={{ color: textColor, fontSize: fontSizeMap[textFontSize], fontWeight: textFontWeight }}
          >
            {textContent}
          </p>
          <button
            onClick={() => {
              setModal(false);
            }}
            className={styles.button}
            style={{
              color: btnColor,
              fontFamily: btnFontFamily,
              backgroundColor: btnBackgroundColor,
              fontSize: fontSizeMap[btnFontSize],
              borderRadius: borderRadiusMap[borderRadius],
              border: {btnBorder},
            }}
          >
            {textBtn}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
// Modal.propTypes = {
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

export default Modal;
