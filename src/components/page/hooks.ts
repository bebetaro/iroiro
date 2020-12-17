import { useCallback, useState } from "react";
import jsCookie from "js-cookie";
import { Category, ModalType, Year } from "../../types";
import { DATA } from "../../data";
import { COOKIE_KEY } from "../../constants";

export const useDataManager = () => {
  const [year, setYear] = useState<Year>("None");
  const [category, setCategory] = useState<Category>("None");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const filteredYear =
    year === "None" ? DATA : DATA.filter((item) => item.year === year);
  const data =
    category === "None"
      ? filteredYear
      : filteredYear.filter((item) => item.category === category);

  const onClickYear = useCallback(
    (year: Year) => () => {
      setYear((prevState) => (prevState === year ? "None" : year));
      setCurrentIndex(0);
    },
    []
  );
  const onClickCategory = useCallback(
    (category: Category) => () => {
      setCategory((prevState) => (prevState === category ? "None" : category));
      setCurrentIndex(0);
    },
    []
  );

  const onSetIndex = useCallback(
    (index: number) => {
      if (index >= data.length) {
        setCurrentIndex(0);
      } else if (index < 0) {
        setCurrentIndex(data.length - 1);
      } else {
        setCurrentIndex(index);
      }
    },
    [data]
  );

  const onIncrementIndex = useCallback(() => {
    setCurrentIndex((prevState) => prevState + 1);
  }, []);
  const onDecrementIndex = useCallback(() => {
    setCurrentIndex((prevState) => prevState - 1);
  }, []);

  return {
    year,
    category,
    setYear: onClickYear,
    setCategory: onClickCategory,
    data,
    onSetIndex,
    onIncrementIndex,
    onDecrementIndex,
    currentIndex,
  };
};

export const useModalController = () => {
  const [isOpen, setIsOpen] = useState<ModalType>("First");
  const types: Array<ModalType> = ["First", "Second", "Third", "Last", "Close"];
  const onCloseModal = (() => {
    let index = 0;
    return useCallback(() => {
      index++;
      if (types[index] === "Close") {
        jsCookie.set(COOKIE_KEY, "done");
      }
      setIsOpen(types[index]);
    }, [index]);
  })();

  return {
    isOpen,
    onCloseModal,
  };
};
