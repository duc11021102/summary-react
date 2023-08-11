import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
const Modal = (props) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};
export default Modal;
