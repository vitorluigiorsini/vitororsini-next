declare module "react-vertical-timeline-component" {
  import type { ReactNode, CSSProperties } from "react";

  interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "1-column-left" | "1-column-right" | "2-columns";
    lineColor?: string;
    children: ReactNode;
  }

  interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    iconClassName?: string;
    intersectionObserverProps?: object;
    position?: "left" | "right";
    style?: CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children: ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

declare module "react-vertical-timeline-component/style.min.css";
