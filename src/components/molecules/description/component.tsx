import React from "react";
import ReactMarkDown from "react-markdown";
import { COLOR, SIZE } from "../../../constants";
import { Text } from "../../atoms/text";
import style from "./style.css";

export type Props = { title: string; description: string; url: string };

/**
 * Description Component
 */
export const Description: React.FC<Props> = React.memo(function Description(
  props
) {
  return (
    <div className={style.root}>
      <div className={style.title}>
        <p className={style.label}>
          <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
            ゲームタイトル
          </Text>
        </p>
        <Text size={SIZE.MEDIUM} color={COLOR.BLACK}>
          {props.title}
        </Text>
      </div>
      <div>
        <p className={style.label}>
          <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
            説明
          </Text>
        </p>
        <div className={style.description}>
          <ReactMarkDown>{props.description}</ReactMarkDown>
          <a
            href={props.url}
            target={"_blank"}
            rel="noreferrer"
            className={style.link}
          >
            公式サイト
          </a>
        </div>
      </div>
    </div>
  );
});

Description.defaultProps = {
  title: "",
  description: "",
};
