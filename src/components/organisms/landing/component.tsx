import React from "react";
import { COLOR, SIZE } from "../../../constants";
import { Text } from "../../atoms/text";

import style from "./style.css";

/**
 * Landing Component
 */
export const Landing: React.FC = React.memo(function Landing() {
  return (
    <div className={style.root}>
      <div>
        <h2 className={style.first}>
          <Text size={SIZE.BIG} color={COLOR.BLACK}>
            いろいろゲーム探索にようこそ！
          </Text>
        </h2>
        <h2 className={style.second}>
          <Text size={SIZE.BIG} color={COLOR.BLACK}>
            ここでは様々な年代とジャンルから色々なゲームを見つけることができるよ！
          </Text>
        </h2>
        <h2 className={style.third}>
          <Text size={SIZE.BIG} color={COLOR.BLACK}>
            気になるジャンルと年代でフィルタリングして
          </Text>
        </h2>
        <h2 className={style.fourth}>
          <Text size={SIZE.BIG} color={COLOR.BLACK}>
            まだ知らない新しいゲームに出会おう！
          </Text>
        </h2>
      </div>
    </div>
  );
});
