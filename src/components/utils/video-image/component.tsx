import React from "react";
import style from "./style.css";

export type Props = {
  id: string;
};

/**
 * VideoImage Component
 */
export const VideoImage: React.FC<Props> = React.memo(function VideoImage(
  props
) {
  return (
    <img
      className={style.root}
      src={`http://img.youtube.com/vi/${props.id}/default.jpg`}
      width={"100%"}
      height={"100%"}
    />
  );
});
