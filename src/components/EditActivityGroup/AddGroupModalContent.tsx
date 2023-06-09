import styles from "./EditActivityGroup.module.css";
import { memo, useCallback, useRef } from "react";
import { IonInput } from "@ionic/react";
import { Button } from "../Button/Button";
import { Title } from "./Title";

export const AddGroupModalContent = memo(
  ({ closeModal, submitModal }: any) => {
    const inputRef = useRef<HTMLIonInputElement>(null);

    const handleSubmit = useCallback((e: any) => {
      e.preventDefault();
      submitModal(inputRef.current?.value);
    }, []);

    return (
      <div className={styles.modalContent}>
        <Title text="Новая группа" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <IonInput
            ref={inputRef}
            label={"Название группы"}
            labelPlacement="floating"
            color={"medium"}
            counter={true}
            maxlength={20}
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <Button
              className={[styles.modalButton, styles.cancelButton].join(" ")}
              onClick={closeModal}
            >
              Отмена
            </Button>
            <Button
              className={[styles.modalButton, styles.submitButton].join(" ")}
              onClick={handleSubmit}
            >
              ОК
            </Button>
          </div>
        </form>
      </div>
    );
  }
);
