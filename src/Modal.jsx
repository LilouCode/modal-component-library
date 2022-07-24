import {useEffect} from 'react';
import styles from './modal.module.css'
import PropTypes from 'prop-types';
export const Modal = ({
  backgroundColor = 'plum',
  fontWeight ='bold',
  text,
  textColor= 'white'
}) => {
  useEffect(() => {
    if (text.length < 1){
      throw Error('Must have some text')
    }
  },[text]);
  return (
    <div style={{backgroundColor: backgroundColor, color: textColor}}>
      <h1>Modal is on the way</h1>
      <p style={{fontWeight: fontWeight}}>{text}</p>
    </div>
  );
}
Modal.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontWeight: PropTypes.oneOf(['normal','bold'])
}