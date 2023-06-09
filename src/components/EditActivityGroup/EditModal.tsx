import { memo } from "react";
import { createPortal } from "react-dom";
import { EditModalContent } from "./EditModalContent";
import { Modal } from "./Modal";

export const EditModal = memo(
  ({
    visible, el, isOpen, onDidDismiss, closeModal, submitModal, currentName,
  }: any) => (
    <>
      {visible &&
        createPortal(
          <Modal el={el} isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <EditModalContent
              closeModal={closeModal}
              submitModal={submitModal}
              currentName={currentName} />
          </Modal>,
          document.body
        )}
    </>
  )
);
