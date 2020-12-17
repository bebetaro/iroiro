import React from "react";
import ReactModal from "react-modal";
import { ModalType } from "../../../../types";
import { DialogBox } from "../dialog-box";

export type Props = {
  isOpen: boolean;
  modalType: ModalType;
  position: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  };
  onCloseModal: () => void;
};

/**
 * Toast Component
 */
export const Toast: React.FC<Props> = React.memo(function Toast(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      style={{
        overlay: { minWidth: 1000, backgroundColor: "rgba(0, 0, 0, 0.75)" },

        content: {
          top: props.position.top,
          right: props.position.right,
          bottom: props.position.bottom,
          left: props.position.left,
          padding: 0,
          background: "transparent",
          border: "none",
          transform: "translate(-50%, -50%)",
        },
      }}
      onRequestClose={props.onCloseModal}
      shouldCloseOnOverlayClick
    >
      <DialogBox onClose={props.onCloseModal} modalType={props.modalType}>
        {props.children}
      </DialogBox>
    </ReactModal>
  );
});
