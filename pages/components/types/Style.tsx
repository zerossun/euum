export type FontWeight =
  | 400
  | 500
  | 600
  | 700
  | 800
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";

export type Padding =
  | number
  | {
      x?: number;
      y?: number;
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
    };
