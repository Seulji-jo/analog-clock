import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { useTimeStore } from "../store/useTimeStore";
import Portal from "./Portal";
import { twoDigitTimeForm } from "../libs/formatOfTime";

interface ToolTipProps {
  children: ReactNode;
}

function Tooltip({ children }: ToolTipProps) {
  const { time } = useTimeStore();
  const { hours, minutes, seconds } = time;
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPoisiton] = useState({
    top: 0,
    left: 0,
  });
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const showTip = () => {
    setIsVisible(true);
  };
  const hideTip = () => {
    setIsVisible(false);
  };

  const handleToolTipPosition = (e: MouseEvent<HTMLSpanElement>) => {
    setPoisiton({ top: e.clientY, left: e.clientX });
  };

  useEffect(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.top = `${position.top - 30}px`;
      tooltipRef.current.style.left = `${position.left + 10}px`;
    }
  }, [position]);

  return (
    <span
      onMouseEnter={showTip}
      onMouseMove={handleToolTipPosition}
      onMouseLeave={hideTip}
      className="w-fit h-auto overflow-hidden rounded-[50%]"
    >
      {children}
      <Portal>
        {isVisible && (
          <div
            ref={tooltipRef}
            className={`min-w-[100px] absolute px-[16px] py-[8px] bg-black bg-opacity-70 rounded-[8px] text-white text-xs font-semibold`}
          >
            {twoDigitTimeForm(hours)}:{twoDigitTimeForm(minutes)}:
            {twoDigitTimeForm(seconds)}
          </div>
        )}
      </Portal>
    </span>
  );
}

export default Tooltip;
