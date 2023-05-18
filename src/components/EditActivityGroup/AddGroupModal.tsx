import { memo } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";
import { AddGroupModalContent } from "./AddGroupModalContent";

export const AddGroupModal = memo(
  ({ visible, el, isOpen, onDidDismiss, closeModal, submitModal }: any) => (
    <>
      {visible &&
        createPortal(
          <Modal el={el} isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <AddGroupModalContent
              closeModal={closeModal}
              submitModal={submitModal}
            />
          </Modal>,
          document.body
        )}
    </>
  )
);
