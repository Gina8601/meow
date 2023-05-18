import styles from "./EditActivityGroup.module.css";
import { IonModal } from "@ionic/react";
import { enterAnimation } from "./enterAnimation";
import { leaveAnimation } from "./leaveAnimation";

export const Modal = ({ el, isOpen, onDidDismiss, children }: any) => (
  <IonModal
    ref={el}
    isOpen={isOpen}
    onDidDismiss={onDidDismiss}
    initialBreakpoint={1}
    breakpoints={[0, 1]}
    className={styles.modal}
    enterAnimation={enterAnimation}
    leaveAnimation={leaveAnimation}
  >
    {children}
  </IonModal>
);
