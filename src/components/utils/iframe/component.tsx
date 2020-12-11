import React from "react";

export type Props = {
  videoId: string;
  isPlay: boolean;
};

/**
 * Iframe Component
 */
export const Iframe: React.FC<Props> = React.memo(function Iframe(props) {
  return (
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      src={`https://www.youtube.com/embed/${props.videoId}?rel=0&autoplay=${
        props.isPlay ? 1 : 0
      }&mute=1`}
      frameBorder={0}
      allowFullScreen
    ></iframe>
  );
});
