import React from "react";
import styled from "@emotion/styled";
import {buttonSize, buttonType} from "../components/ButtonStyle";

type ButtonStyleProps = {
  state: "normal";
  size: "small" | "medium" | "large";
  colorType: "black" | "white" | "brown";
};

const ButtonStyle = styled.button<ButtonStyleProps>`
  border-radius: 5px;

  ${(props) => buttonSize[props.size]}
  ${(props) => buttonType[props.colorType]?.[props.state]}
`;

interface BunttonProps extends ButtonStyleProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: any;
}

const Button = ({children, onClick, ...styleProps}: BunttonProps) => {
  return (
    <ButtonStyle {...styleProps} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
