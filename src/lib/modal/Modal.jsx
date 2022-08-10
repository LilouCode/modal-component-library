import React from "react";
import { useState, useEffect } from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

/**
 * Modal Library
 * 
 * @returns This component returns a modal with only 2 props required and over 16 props to customize, check the read me
 */
const Modal = ({
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
  titleFontSize ="super",
  titleFontWeight,
  wrapperBackgroundColor = "#ffffff",
}) => {
  const [isModalOpen, setModal] = useState(true); //manage the state open/close of the modal
  useEffect(() => {
    if (textContent.length < 1) {//if there is no text 
      throw Error("Must have some text");
    }
  }, [textContent]);

  const borderRadiusMap = { //options for borders
    oval: "50px",
    round: "10px",
    square: "0px",
  };
  const fontSizeMap = { //option for font size
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
Modal.propTypes = {
  borderRadius: PropTypes.oneOf(["oval", "round", "square"]),
  btnColor: PropTypes.string,
  btnBackgroundColor: PropTypes.string,
  btnBorder: PropTypes.string,
  btnFontFamily: PropTypes.string,
  btnFontSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "large",
    "super",
    "extra",
    "giant"
  ]),
  closeIcon: PropTypes.string,
  textBtn: PropTypes.string,
  textColor: PropTypes.string,
  textContent: PropTypes.string.isRequired,
  textFontFamily: PropTypes.string,
  textFontSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "large",
    "super",
    "extra",
    "giant"
  ]),
  textFontWeight: PropTypes.string,
  titleColor: PropTypes.string,
  titleContent: PropTypes.string,
  titleFontSize: PropTypes.string,
  titleFontSize: PropTypes.string,
  wrapperBackgroundColor: PropTypes.string,
};

export default Modal;
