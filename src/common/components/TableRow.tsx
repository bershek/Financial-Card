import className from "classnames";
import { ReactNode } from "react";

import { TEXT_ALIGN } from "@/common/constants";

interface TableRowProps {
  label: string;
  values: Array<number | string | ReactNode>;
  textAlign?: TEXT_ALIGN;
  reversedStyle?: boolean;
  withUnderLine?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  label,
  values,
  textAlign = TEXT_ALIGN.CENTER,
  reversedStyle = false,
  withUnderLine = false,
}) => {
  const formattedLabel = label.replace("_", " ");

  const alignClass =
    textAlign === TEXT_ALIGN.LEFT ? "text-left" : textAlign === TEXT_ALIGN.RIGHT ? "text-right" : "text-center";

  return (
    <tr
      className={className({
        "border-b border-gray-300": withUnderLine,
      })}
    >
      <td
        className={className({
          "text-blue-600": !reversedStyle,
        })}
      >
        {formattedLabel}
      </td>
      {values.map((v, i) => (
        <td
          key={i}
          className={className(`${alignClass}`, {
            "text-blue-600": reversedStyle,
          })}
        >
          {v}
        </td>
      ))}
    </tr>
  );
};
