import { memo } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";
import { AddItemModalContent } from "./AddItemModalContent";

export const AddItemModal = memo(
  ({ visible, el, isOpen, onDidDismiss, closeModal, submitModal }: any) => (
    <>
      {visible &&
        createPortal(
          <Modal el={el} isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <AddItemModalContent
              closeModal={closeModal}
              submitModal={submitModal}
            />
          </Modal>,
          document.body
        )}
    </>
  )
);
