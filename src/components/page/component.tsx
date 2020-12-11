import React from "react";
import { COLOR, SIZE } from "../../constants";
import { Text } from "../atoms/text";
import { Contents } from "../organisms/contents";
import { Filter } from "../organisms/filter";
import { useDataManager } from "./hooks";

import style from "./style.css";

/**
 * Page Component
 */
export const Page: React.FC = React.memo(function Page() {
  const {
    data,
    year,
    category,
    currentIndex,
    setYear,
    setCategory,
    setIndex,
  } = useDataManager();

  return (
    <div className={style.root}>
      <div className={style.header}>
        <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
          いろいろゲーム探索
        </Text>
        <Filter
          year={year}
          category={category}
          onSetYear={setYear}
          onSetCategory={setCategory}
        />
      </div>

      <Contents data={data} currentIndex={currentIndex} setIndex={setIndex} />
    </div>
  );
});
