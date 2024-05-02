import React from "react";
import classNames from "classnames";
import {Txt} from "./types/Txt";

interface checkboxProps {
  text?: string;
  disabled?: boolean;
  checked: boolean;
  onchange: (ischecked: boolean) => void;
}

const Checkbox: React.FC<checkboxProps> = ({
  text,
  disabled,
  checked,
  onchange,
}) => {
  const handClick = () => {
    onchange(!checked);
  };
  return (
    <label>
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={checked}
        disabled={disabled}
        onChange={handClick}
      />
      {text}
    </label>
  );
};
export default Checkbox;
