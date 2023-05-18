import styles from "./Modal.module.css";

export const Modal = ({ onClose }: any) => {
  return (
    <div className={styles.modal}>
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
