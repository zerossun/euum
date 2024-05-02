import {forwardRef} from "react";
import {FontWeight, TextAlign} from "../types/style";

export type TxtBaseProps = {
  children?: React.ReactNode;
  size?: number;
  lineHeight?: number;
  letterSpacing?: number;
  weight?: FontWeight;
  color?: string;
  align?: TextAlign;
  family?: "SUIT" | "NEXON";
  display?: "block" | "inline" | "inline-block";
  ellipsis?: boolean;
};
export type TxtProps = React.ComponentPropsWithoutRef<"span"> & TxtBaseProps;

const familyMap = {
  SUIT: "'SUIT', sans-serif",
  NEXON: "'NexonLv1Gothic', 'SUIT Variable', sans-serif",
};

export const Txt = forwardRef<HTMLSpanElement, TxtProps>(function Txt(
  {
    children,
    size,
    lineHeight,
    letterSpacing,
    weight,
    color,
    align,
    family,
    display,
    ellipsis = false,
    style,
    ...props
  },
  ref
) {
  return (
    <span
      ref={ref}
      style={{
        fontSize: size ? `${size}px` : undefined,
        lineHeight: lineHeight ? `${lineHeight}px` : undefined,
        fontWeight: weight,
        color: color,
        textAlign: align,
        display: display,
        fontFamily: family ? familyMap[family] : undefined,
        overflow: ellipsis ? "hidden" : undefined,
        textOverflow: ellipsis ? "ellipsis" : undefined,
        whiteSpace: ellipsis ? "nowrap" : undefined,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : "-0.4px",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
});
