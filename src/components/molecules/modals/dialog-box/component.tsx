import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import { ModalType } from "../../../../types";
import { Text } from "../../../atoms/text";
import { Normal } from "../../buttons/normal";
import style from "./style.css";

export type Props = {
  modalType: ModalType;
  onClose: () => void;
};

/**
 * DialogBox Component
 */
export const DialogBox: React.FC<Props> = React.memo(function DialogBox(props) {
  return (
    <div className={style.root}>
      <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
        {props.children}
      </Text>
      <Normal onClick={props.onClose}>
        {props.modalType === "Last" ? "閉じる" : "次へ"}
      </Normal>
    </div>
  );
});

DialogBox.defaultProps = {};
