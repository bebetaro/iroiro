import React, { useState, useCallback, useEffect } from "react";
import { COLOR, SIZE } from "../../../constants";
import { Text } from "../../atoms/text";
import { Arrow } from "../../molecules/buttons/arrow";
import { Iframe } from "../iframe";
import { Thumbnails } from "../thumbnails";

import style from "./style.css";

export type Props = {
  data: Array<string>;
  setCurrentItem: (index: number) => void;
};

/**
 * Carousel Component
 */
export const Carousel: React.FC<Props> = React.memo(function Carousel(props) {
  const [count, setCount] = useState<number>(0);
  const [canAnimation, setCanAnimation] = useState<boolean>(true);
  const width = (window.innerWidth * 2) / 3;
  const height = (window.innerHeight * 2) / 3;

  const onClickLeft = useCallback(() => {
    setCanAnimation(true);
    setCount((prevState) => prevState - 1);
  }, []);
  const onClickRight = useCallback(() => {
    setCanAnimation(true);
    setCount((prevState) => prevState + 1);
  }, []);

  useEffect(() => {
    props.setCurrentItem(count);
    if (count === -1) {
      setTimeout(() => {
        setCanAnimation(false);
        setCount(props.data.length - 1);
      }, 300);
    } else if (count === props.data.length) {
      setTimeout(() => {
        setCanAnimation(false);
        setCount(0);
      }, 300);
    }
  }, [count, props.data]);

  useEffect(() => {
    const timeId = setInterval(() => {
      onClickRight();
    }, 30_000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <div className={style.root}>
      <div className={style.buttonLeft}>
        <Arrow onClick={onClickLeft} direction={"left"} />
      </div>
      <div className={style.buttonRight}>
        <Arrow onClick={onClickRight} direction={"right"} />
      </div>
      {props.data.length === 1 && props.data[0] === "" ? (
        <Text size={SIZE.BIG} color={COLOR.BLACK}>
          選択の条件ではゲームタイトルが存在しません
        </Text>
      ) : (
        <div
          className={style.items}
          style={{
            width,
            height,
            transform: `translate3d(${-100 * (count + 2)}%, 0, 0)`,
            // stylelint-disable-next-line
            transition: canAnimation ? "ease-in-out 0.2s" : "none",
          }}
        >
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe
                videoId={props.data[props.data.length - 2]}
                isPlay={false}
              />
            </div>
          </div>
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe
                videoId={props.data[props.data.length - 1]}
                isPlay={false}
              />
            </div>
          </div>

          {props.data.map((item, key) => {
            return (
              <div className={style.each} key={key} style={{ height: "100%" }}>
                <div className={style.item}>
                  <Iframe videoId={item} isPlay={key === count} />
                </div>
              </div>
            );
          })}
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe videoId={props.data[0]} isPlay={false} />
            </div>
          </div>
          <div className={style.each} style={{ height: "100%" }}>
            <div className={style.item}>
              <Iframe videoId={props.data[1]} isPlay={false} />
            </div>
          </div>
        </div>
      )}
      <Thumbnails data={props.data} setIndex={setCount} />
    </div>
  );
});
