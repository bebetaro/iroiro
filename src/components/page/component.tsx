import React, { useEffect, useState } from "react";
import jsCookie from "js-cookie";
import { COLOR, COOKIE_KEY, SIZE } from "../../constants";
import { Text } from "../atoms/text";
import { Modals } from "../molecules/modals/modals";
import { Filter } from "../organisms/filter";
import { Landing } from "../organisms/landing";
import { Carousel } from "../utils/carousel";
import { useDataManager, useModalController } from "./hooks";

import style from "./style.css";

/**
 * Page Component
 */
export const Page: React.FC = React.memo(function Page() {
  const [isLanding, setIsLanding] = useState<boolean>(true);
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const {
    data,
    year,
    category,
    currentIndex,
    setYear,
    setCategory,
    onSetIndex,
    onIncrementIndex,
    onDecrementIndex,
  } = useDataManager();

  const { isOpen, onCloseModal } = useModalController();

  useEffect(() => {
    const result = jsCookie.get(COOKIE_KEY);
    if (result) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }
  }, []);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsLanding(false);
    }, 6_000);
    return () => {
      clearTimeout(timeId);
    };
  });

  if (isLanding && !isFirst) {
    return <Landing />;
  }

  return (
    <div className={style.root}>
      {!isFirst && <Modals isOpen={isOpen} onCloseModal={onCloseModal} />}
      <div className={style.header}>
        <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
          いろいろゲーム探索
        </Text>
        <div style={{ zIndex: isOpen === "First" ? 1 : undefined }}>
          <Filter
            year={year}
            category={category}
            onSetYear={setYear}
            onSetCategory={setCategory}
          />
        </div>
      </div>

      <Carousel
        data={data}
        modalType={isOpen}
        currentIndex={currentIndex}
        setCurrentItem={onSetIndex}
        onDecrement={onDecrementIndex}
        onIncrement={onIncrementIndex}
      />
    </div>
  );
});
