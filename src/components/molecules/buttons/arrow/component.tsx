import React from "react";
import classnames from "classnames";
import { Button } from "../../../atoms/button";

import style from "./style.css";

export type Props = {
  direction: "left" | "right";
  onClick: () => void;
};

/**
 * Arrow Component
 */
export const Arrow: React.FC<Props> = React.memo(function Arrow(props) {
  return (
    <div
      className={classnames({
        [style.root]: true,
        [style.left]: props.direction === "left",
        [style.right]: props.direction === "right",
      })}
    >
      <Button onClick={props.onClick} />
    </div>
  );
});
