import { useState, useEffect } from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

export const Modal = ({
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
  };
  return isModalOpen ? (
    <div className={styles.background}>
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
          <p
            className={styles.text}
            style={{ color: textColor, fontSize: fontSizeMap[textFontSize] }}
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
  textFontFamily: PropTypes.string,
  btnFontFamily: PropTypes.string,
  btnColor: PropTypes.string,
  borderRadius: PropTypes.oneOf(["oval", "round", "square"]),
  textColor: PropTypes.string,
  textContent: PropTypes.string.isRequired,
  textFontSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "large",
    "super",
    "extra",
  ]),
  btnFontSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "large",
    "super",
    "extra",
  ]),
};
