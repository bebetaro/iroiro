import { useCallback, useState } from "react";
import { Category, Year } from "../../atoms/type";
import { Data, DATA } from "../../data";

export const useDataManager = () => {
  const [year, setYear] = useState<Year>("None");
  const [category, setCategory] = useState<Category>("None");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const filteredYear =
    year === "None" ? DATA : DATA.filter((item) => item.year === year);
  const filteredCategory =
    category === "None"
      ? filteredYear
      : filteredYear.filter((item) => item.category === category);

  const onClickYear = useCallback(
    (year: Year) => () => {
      setYear(year);
      setCurrentIndex(0);
    },
    []
  );
  const onClickCategory = useCallback(
    (category: Category) => () => {
      setCategory(category);
      setCurrentIndex(0);
    },
    []
  );

  const defaultData: Array<Data> = [
    {
      videoId: "",
      category: "None",
      title: "",
      year: "None",
      description: "",
    },
  ];

  const data = filteredCategory.length === 0 ? defaultData : filteredCategory;

  const setIndex = useCallback(
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

  return {
    year,
    category,
    setYear: onClickYear,
    setCategory: onClickCategory,
    data,
    setIndex,
    currentIndex,
  };
};
