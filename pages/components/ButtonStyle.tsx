import {css} from "@emotion/react";
//import theme from "@components/lib/styles/theme";
import {colors} from "../constants/colors";

export const buttonSize = {
  small: css`
    width: 50px;
    height: 30px;
    text-align: center;
  `,
  medium: css`
    width: 150px;
    height: 30px;
    text-align: center;
  `,
  large: css`
    width: 100%;
    height: 100%;
    text-align: center;
  `,
};

export const backButtonColorOfState = {
  normal: css`
    background-color: ${colors.black};
    color: ${colors.white};
    &:hover {
      background-color: #535050;
    }
  `,
  disabled: css`
    background-color: #ccc; // 예시로 회색 배경을 사용하였습니다. 원하는 색상으로 변경해주세요.
    color: ${colors.white};
  `,
};

export const whiteButtonColorOfState = {
  normal: css`
    background-color: ${colors.white};
    color: ${colors.black};
    border: 1px solid #7a7979;

    &:hover {
      background-color: #f8f8f8;
    }
  `,
};

export const brownButtonColorOfState = {
  normal: css`
    background-color: ${colors.blue};
    color: ${colors.white};
    &:hover {
      background-color: #5f3837;
    }
  `,
};

export const buttonType = {
  black: backButtonColorOfState,
  white: whiteButtonColorOfState,
  brown: brownButtonColorOfState,
};
