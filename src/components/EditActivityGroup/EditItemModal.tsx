import { memo } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";
import { EditItemModalContent } from "./EditItemModalContent";

export const EditItemModal = memo(
  ({ visible, el, isOpen, onDidDismiss, closeModal, submitModal, currentName }: any) => (
    <>
      {visible &&
        createPortal(
          <Modal el={el} isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <EditItemModalContent
              closeModal={closeModal}
              submitModal={submitModal}
              currentName={currentName}
            />
          </Modal>,
          document.body
        )}
    </>
  )
);
