import type * as React from "react";

export type GameIcons = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
>;
