import type * as React from "react";

export type HeroIcon = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
>;
