import React, { useCallback, useState } from "react";
import classnames from "classnames";
import { COLOR, SIZE } from "../../../../constants";
import { Button } from "../../../atoms/button";
import { Text } from "../../../atoms/text";

import style from "./style.css";

export type Props = { isActive: boolean; onClick: () => void };

/**
 * FilterButton Component
 */
export const FilterButton: React.FC<Props> = React.memo(function FilterButton(
  props
) {
  return (
    <div
      className={classnames({
        [style.root]: true,
        [style.normal]: !props.isActive,
        [style.active]: props.isActive,
      })}
    >
      <Button onClick={props.onClick}>
        <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
          {props.children}
        </Text>
      </Button>
    </div>
  );
});
