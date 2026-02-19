import React from "react";
import {
  Button as UiButton,
  type ButtonProps as UiButtonProps,
} from "./ui/button";

export enum Size {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DESTRUCTIVE = "destructive",
}

export interface ButtonProps {
  size?: Size;
  variant: Variant;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <UiButton {...props}>{children}</UiButton>
);
