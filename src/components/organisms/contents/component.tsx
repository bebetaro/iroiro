import React from "react";
import { Data } from "../../../data";
import { Description } from "../../molecules/description";
import { Carousel } from "../../utils/carousel";
import style from "./style.css";

export type Props = {
  currentIndex: number;
  data: Array<Data>;
  setIndex: (index: number) => void;
};

/**
 * Contents Component
 */
export const Contents: React.FC<Props> = React.memo(function Contents(props) {
  const ids = props.data.map((item) => item.videoId);
  return (
    <div className={style.root}>
      <Carousel data={ids} setCurrentItem={props.setIndex} />
      <Description
        title={props.data[props.currentIndex].title}
        description={props.data[props.currentIndex].description}
      />
    </div>
  );
});

Contents.defaultProps = {
  data: [
    {
      videoId: "",
      category: "None",
      title: "",
      year: "None",
      description: "",
    },
  ],
};
