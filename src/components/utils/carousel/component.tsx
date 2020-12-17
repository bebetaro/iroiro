import React from "react";
import { COLOR, SIZE } from "../../../constants";
import { Data } from "../../../data";
import { ModalType } from "../../../types";
import { Text } from "../../atoms/text";
import { Arrow } from "../../molecules/buttons/arrow";
import { Description } from "../../molecules/description";
import { Iframe } from "../iframe";
import { Thumbnails } from "../thumbnails";
import { useControlAnimation } from "./hooks";

import style from "./style.css";

export type Props = {
  data: Array<Data>;
  currentIndex: number;
  modalType: ModalType;
  setCurrentItem: (index: number) => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

/**
 * Carousel Component
 */
export const Carousel: React.FC<Props> = React.memo(function Carousel(props) {
  const ids = props.data.map((item) => item.videoId);
  const margin = props.data.length > 2 ? 2 : props.data.length > 1 ? 1 : 0;
  const {
    canAnimation,
    isShow,
    onClickLeft,
    onClickRight,
    onSetHide,
    onSetShow,
  } = useControlAnimation(props);

  if (props.data.length === 0) {
    return (
      <div className={style.notFound}>
        <div>
          <Text size={SIZE.BIG} color={COLOR.BLACK}>
            選択の条件ではゲームタイトルが存在しません
          </Text>
          <Text size={SIZE.BIG} color={COLOR.BLACK}>
            年代やジャンルを他のものに変えてみよう！
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div className={style.root}>
      <div className={style.buttonLeft}>
        <Arrow onClick={onClickLeft} direction={"left"} />
      </div>
      <div className={style.buttonRight}>
        <Arrow onClick={onClickRight} direction={"right"} />
      </div>
      <div
        className={style.items}
        style={{
          transform: `translate3d(${
            -100 * (props.currentIndex + margin)
          }%, 0, 0)`,
          transition: canAnimation ? "ease-in-out 0.2s" : "none",
        }}
        onMouseEnter={onSetShow}
        onMouseLeave={onSetHide}
      >
        {props.data.length > 2 && (
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe
                videoId={props.data[props.data.length - 2].videoId}
                isPlay={false}
              />
            </div>
          </div>
        )}
        {props.data.length > 1 && (
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe
                videoId={props.data[props.data.length - 1].videoId}
                isPlay={false}
              />
            </div>
          </div>
        )}

        {props.data.map((item, key) => {
          return (
            <div className={style.each} key={key} style={{ height: "100%" }}>
              <div className={style.item}>
                <Iframe
                  videoId={item.videoId}
                  isPlay={key === props.currentIndex}
                />
              </div>
            </div>
          );
        })}
        {props.data.length > 1 && (
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe videoId={props.data[0].videoId} isPlay={false} />
            </div>
          </div>
        )}
        {props.data.length > 2 && (
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe videoId={props.data[1].videoId} isPlay={false} />
            </div>
          </div>
        )}
      </div>

      <Thumbnails data={ids} setIndex={props.setCurrentItem} />
      {(isShow || props.modalType === "Third") && (
        <div
          className={style.description}
          onMouseEnter={onSetShow}
          onMouseLeave={onSetHide}
        >
          <Description
            url={props.data[props.currentIndex].hp}
            title={props.data[props.currentIndex].title}
            description={props.data[props.currentIndex].description}
          />
        </div>
      )}
    </div>
  );
});
