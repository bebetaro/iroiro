import React, { useCallback } from "react";
import { Button } from "../../atoms/button";

import style from "./style.css";

export type Props = {
  data: Array<string>;
  setIndex: (index: number) => void;
};

/**
 * Thumbnails Component
 */
export const Thumbnails: React.FC<Props> = React.memo(function Thumbnails(
  props
) {
  const onClick = useCallback(
    (index: number) => () => {
      props.setIndex(index);
    },
    []
  );
  return (
    <ul className={style.root}>
      {props.data.map((id, key) => {
        return (
          <li key={id} className={style.item}>
            <div
              className={style.thumbnail}
              style={{
                background: `no-repeat center url(http://img.youtube.com/vi/${id}/default.jpg)`,
              }}
            >
              <Button onClick={onClick(key)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
});
