import React, { useCallback, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Category, Year } from "../../../atoms/type";
import { FilterButton } from "../../molecules/buttons/filter-button";
import { Primary } from "../../molecules/buttons/primary";

import style from "./style.css";

export type Props = {
  year: Year;
  category: Category;
  onSetYear: (year: Year) => () => void;
  onSetCategory: (category: Category) => () => void;
};

/**
 * Filter Component
 */
export const Filter: React.FC<Props> = React.memo(function Filter(props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className={style.root}>
      <Primary onClick={onClick}>フィルター</Primary>
      <OutsideClickHandler onOutsideClick={onClose}>
        {isOpen && (
          <div className={style.filter}>
            <div className={style.years}>
              {/* <Text size={SIZE.SMALL} color={COLOR.BLACK}>
              年代
            </Text> */}
              {/* years */}
              <FilterButton
                isActive={props.year === "90"}
                onClick={props.onSetYear("90")}
              >
                1990年代
              </FilterButton>
              <FilterButton
                isActive={props.year === "00"}
                onClick={props.onSetYear("00")}
              >
                2000年代
              </FilterButton>
              <FilterButton
                isActive={props.year === "10"}
                onClick={props.onSetYear("10")}
              >
                2010年代
              </FilterButton>
            </div>
            {/* Categories */}
            <div className={style.category}>
              <div>
                <FilterButton
                  isActive={props.category === "Action"}
                  onClick={props.onSetCategory("Action")}
                >
                  アクション
                </FilterButton>
                <FilterButton
                  isActive={props.category === "MOBA"}
                  onClick={props.onSetCategory("MOBA")}
                >
                  MOBA
                </FilterButton>
                <FilterButton
                  isActive={props.category === "Mobile"}
                  onClick={props.onSetCategory("Mobile")}
                >
                  ソシャゲ
                </FilterButton>
              </div>
              <div>
                <FilterButton
                  isActive={props.category === "Novel"}
                  onClick={props.onSetCategory("Novel")}
                >
                  ノベル
                </FilterButton>
                <FilterButton
                  isActive={props.category === "RPG"}
                  onClick={props.onSetCategory("RPG")}
                >
                  RPG
                </FilterButton>
                <FilterButton
                  isActive={props.category === "Puzzle"}
                  onClick={props.onSetCategory("Puzzle")}
                >
                  パズル
                </FilterButton>
              </div>
              <div>
                <FilterButton
                  isActive={props.category === "Shooting"}
                  onClick={props.onSetCategory("Shooting")}
                >
                  ｼｭｰﾃｨﾝｸﾞ
                </FilterButton>
                <FilterButton
                  isActive={props.category === "Sports"}
                  onClick={props.onSetCategory("Sports")}
                >
                  スポーツ
                </FilterButton>
                <FilterButton
                  isActive={props.category === "Other"}
                  onClick={props.onSetCategory("Other")}
                >
                  その他
                </FilterButton>
              </div>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
});
