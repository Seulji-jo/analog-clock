import { useRef } from "react";
import HandOfClock from "./HandOfClock";

function AnalogClock() {
  const hourHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const secondHandRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-60 h-60 bg-black rounded-[50%] flex items-center justify-center">
      <div className="w-56 h-56 bg-white rounded-[50%] relative ">
        <HandOfClock ref={secondHandRef} kind="second" />
        <HandOfClock ref={minuteHandRef} kind="minute" />
        <HandOfClock ref={hourHandRef} kind="hour" />
        <div className="w-[14px] h-[14px] rounded-[50%] absolute bottom-[50%] left-[50%] origin-bottom translate-x-[-50%] translate-y-[50%] bg-black"></div>
      </div>
    </div>
  );
}

export default AnalogClock;
