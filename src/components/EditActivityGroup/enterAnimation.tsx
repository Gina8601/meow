import { createAnimation } from "@ionic/react";

export const enterAnimation = (baseEl: HTMLElement) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation("backdropAnimation");
  const wrapperAnimation = createAnimation("wrapperAnimation");
  const root = baseEl.shadowRoot;

  backdropAnimation
    .addElement((root?.querySelector("ion-backdrop"))!)
    .fromTo("opacity", 0, "var(--backdrop-opacity)")
    .beforeStyles({
      "pointer-events": "none",
    })
    .afterClearStyles(["pointer-events"]);

  wrapperAnimation
    .addElement((root?.querySelector(".modal-wrapper"))!)
    .keyframes([
      { offset: 0, opacity: 0, transform: "translateY(100%)" },
      { offset: 1, opacity: 1, transform: "translateY(0px)" },
    ]);

  return baseAnimation
    .addElement(baseEl)
    .easing("ease")
    .duration(280)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
