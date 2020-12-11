import React from "react";
import style from "./style.css";

export type Props = {
  onClick: () => void;
};

/**
 * Button Component
 */
export const Button: React.FC<Props> = React.memo(function Button(props) {
  return (
    <button className={style.root} onClick={props.onClick} type={"button"}>
      {props.children}
    </button>
  );
});
