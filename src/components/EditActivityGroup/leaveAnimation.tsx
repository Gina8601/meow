import { enterAnimation } from "./enterAnimation";

export const leaveAnimation = (baseEl: HTMLElement) => {
  return enterAnimation(baseEl).direction("reverse");
};
