import { useState, useCallback, useEffect } from "react";
import { Props } from "./component";

const THREE_MINUTES = 180_000;

export const useControlAnimation = (props: Props) => {
  const [canAnimation, setCanAnimation] = useState<boolean>(true);
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClickLeft = useCallback(() => {
    setCanAnimation(true);
    props.onDecrement();
  }, []);
  const onClickRight = useCallback(() => {
    setCanAnimation(true);
    props.onIncrement();
  }, []);

  const onSetShow = useCallback(() => {
    setIsShow(true);
  }, []);
  const onSetHide = useCallback(() => {
    setIsShow(false);
  }, []);

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (props.currentIndex === -1) {
      timeId = setTimeout(() => {
        setCanAnimation(false);
        props.setCurrentItem(props.data.length - 1);
      }, 300);
    } else if (props.currentIndex >= props.data.length) {
      timeId = setTimeout(() => {
        setCanAnimation(false);
        props.setCurrentItem(0);
      }, 300);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [props.currentIndex]);

  useEffect(() => {
    const timeId = setInterval(() => {
      onClickRight();
    }, THREE_MINUTES);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return {
    canAnimation,
    isShow,
    onClickLeft,
    onClickRight,
    onSetShow,
    onSetHide,
  };
};
