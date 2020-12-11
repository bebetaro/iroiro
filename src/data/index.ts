import { Category, Year } from "../atoms/type";

export type Data = {
  videoId: string;
  title: string;
  description: string;
  year: Year;
  category: Category;
};
export const DATA: Array<Data> = [
  {
    title: "ポケットモンスター",
    description: ``,
    videoId: "BoZ0Zwab6Oc",
    year: "90",
    category: "RPG",
  },
  {
    title: "キャサリン",
    description: ``,
    videoId: "NqVOssrCTd8",
    year: "10",
    category: "Puzzle",
  },
  {
    title: "The Elder Scrolls V: Skyrim",
    description: ``,
    videoId: "JSRtYpNRoN0",
    year: "10",
    category: "RPG",
  },
];
