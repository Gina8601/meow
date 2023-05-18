import React from "react";
import styles from "./Button.module.css";
import { IonRippleEffect } from "@ionic/react";

export const Button = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      {...props}
      className={[styles.button, "ion-activatable", className].join(" ")}
    >
      {children}
      <IonRippleEffect></IonRippleEffect>
    </div>
  );
};
