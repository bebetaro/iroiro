import React from "react";
import { ModalType } from "../../../../types";
import { Toast } from "../toast";

export type Props = {
  isOpen: ModalType;
  onCloseModal: () => void;
};

/**
 * Modals Component
 */
export const Modals: React.FC<Props> = React.memo(function Modals(props) {
  return (
    <>
      <Toast
        isOpen={props.isOpen === "First"}
        onCloseModal={props.onCloseModal}
        modalType={props.isOpen}
        position={{ top: "80px", right: "100px" }}
      >{`フィルターボタンから
      条件を変更できるよ！`}</Toast>
      <Toast
        isOpen={props.isOpen === "Second"}
        onCloseModal={props.onCloseModal}
        modalType={props.isOpen}
        position={{ top: "55%", left: "50%" }}
      >{`ゲームタイトルは
      時間が経つと変わっていくよ！
      自分で変えたい時は左右のボタンか
      下のサムネイルを押してね！`}</Toast>
      <Toast
        isOpen={props.isOpen === "Third"}
        onCloseModal={props.onCloseModal}
        modalType={props.isOpen}
        position={{ top: "45%", left: "50%" }}
      >{`気になるゲームにマウスを乗せると
      解説が見られるよ！`}</Toast>
      <Toast
        isOpen={props.isOpen === "Last"}
        onCloseModal={props.onCloseModal}
        modalType={props.isOpen}
        position={{ top: "50%", left: "50%" }}
      >{`さあゲーム探索を始めよう！`}</Toast>
    </>
  );
});
